import express, { Router, NextFunction, Response, Request } from 'express';
const Heroes = require('../data.json');

export class HeroRouter{

    router : express.Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction){
        res.send(Heroes);
    }

    public getOne(req:Request, res:Response, next:NextFunction){
        let query = parseInt(req.params.id);
        let hero = Heroes.find((hero: any) => hero.id === query);

        if(hero)
        {
            res.status(200)
                .send({
                    message: "Success",
                    status: res.status,
                    hero
                });
        } else{
            res.status(404)
                .send({
                    message: "No hero found for the given id",
                    status: res.status
                });
        }
    }

    init(){
        this.router.get('/' ,this.getAll);
        this.router.get('/:id', this.getOne);
    }
}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;
