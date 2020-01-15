import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";


export const checkRole = (roles: Array<string>) =>{
    return async(req: Request, res: Response, next: NextFunction) => {

        //fetchig the userId from checkJwt middleware
        const id = res.locals.jwtPayload.userId;

        //Find the user role from DB
        const userRepo = getRepository(User);

        let user: User;

        try {
            user = await userRepo.findOneOrFail(id);
        } catch (error) {
            res.status(401).send();
        }

        //Check if the user role is a part of authorized roles

        if(roles.indexOf(user.role) > -1){ next(); }
        else{
            res.status(401).send();
        }
    }
}