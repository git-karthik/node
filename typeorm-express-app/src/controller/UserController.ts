import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import { validate } from "class-validator";

class UserController {

    static listAll = async(request: Request, response: Response, next: NextFunction) => {
        const userRepository = getRepository(User);
        const users = await userRepository.find({
            select:["id", "username", "role"]
        });

        response.send(users);
    }

    static getOneById = async (request: Request, response: Response, next: NextFunction) => {
        const userRepository = getRepository(User);
        const id:number = <unknown>request.params.id as number;

        try{
            const user = userRepository.findOneOrFail(id, {
                select:["id","username","role"]
            })
        }catch(Error){
            response.status(404).send();
        }
    }

    static newUser = async(request: Request, response: Response, next: NextFunction) => {
        //Get Parameters from the body
        let {username, password, role} = request.body;
        let user = new User();
        user.username = username;
        user.password = password;
        user.role = role;

        //Validate User Object
        const errors = await validate(user);
        if(errors.length > 0)
        {
            response.status(400).send();
            return;
        }

        //Hash the password before save
        user.hashpassword();

        const userRepo = getRepository(User);

        try {
            await userRepo.save(user);
        } catch (error) {
            response.status(409).send("Username already in use");
            return;
        }

        //All ok
        response.status(201).send("User created successfully");
    }

    static editUser = async (req: Request, res: Response) => {
        //Get the ID from the url
        const id = req.params.id;
      
        //Get values from the body
        const { username, role } = req.body;
      
        //Try to find user on database
        const userRepository = getRepository(User);
        let user;
        try {
          user = await userRepository.findOneOrFail(id);
        } catch (error) {
          //If not found, send a 404 response
          res.status(404).send("User not found");
          return;
        }
        //Validate the new values on model
        user.username = username;
        user.role = role;
        const errors = await validate(user);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        //Try to safe, if fails, that means username already in use
        try {
            await userRepository.save(user);
        } catch (e) {
            res.status(409).send("username already in use");
            return;
        }
        //After all send a 204 (no content, but accepted) response
        res.status(204).send();
    };

    static deleteUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;

    const userRepository = getRepository(User);
    let user: User;
    try {
        user = await userRepository.findOneOrFail(id);
    } catch (error) {
        res.status(404).send("User not found");
        return;
    }
    userRepository.delete(id);

    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
    };   

}
export default UserController;