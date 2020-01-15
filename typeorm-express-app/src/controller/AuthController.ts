import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { validate } from "class-validator";

class AuthController{

    static login = async (req: Request, res: Response) => {

        let {username, password} = req.body;

        if(!(username && password))
        {
            res.status(400).send();
        }

        const userRepo =  getRepository(User);
        let user: User;
        try {
            user = await userRepo.findOneOrFail({where:{username}});
        } catch (error) {
            res.status(401).send(error.message);
        }
        
        //Checking if encrypted password match
        if(!user.checkIfPasswordIsValid(password)){
            res.status(401).send();
            return;
        }

        //Sign JWT
        const token = jwt.sign(
            {userId: user.id, username: user.username},
            config.jwtSecret,
            {expiresIn: "1h"}
        );

        res.send(token);
    };

    static changePassword = async(req: Request, res: Response)=>{

        //Get id from JWT
        const id = res.locals.jwtPayload.userId;

        //Get parameters from the body
        const {oldpassword, newpassword} = req.body;
        if(!(oldpassword && newpassword)){
            res.status(400).send();
        }

        const userRepo = getRepository(User);
        let user: User;

        try {
            user = await userRepo.findOneOrFail(id);
        } catch (error) {
            res.status(401).send();
        }

        //check if old password matches
        if(!user.checkIfPasswordIsValid(oldpassword)){
            res.status(401).send();
            return;
        }

        //Validating the model
        user.password = newpassword;

        const errors = await validate(user);

        if(errors.length > 0){
            res.status(400).send(errors);
            return;
        }

        //Hash the password and save
        user.hashpassword();
        userRepo.save(user);

        res.status(204).send();
    };
}

export default AuthController;