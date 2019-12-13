import * as path from 'path';
import express from "express";
import morgan from 'morgan';
import bodyParser from 'body-parser';

class App{
    public xpress = express.application;

    constructor(){
        this.xpress = express();
        this.middleware();
        this.routes();
    }

    private routes() {
        let router = express.Router();

        router.get('/',(req, res, next) => {
            res.json({
                message: "Hello World!!!"
            });
        });
        this.xpress.use('/', router);
    }
    private middleware(): void {
        this.xpress.use(morgan("dev"));
        this.xpress.use(bodyParser.json());
        this.xpress.use(bodyParser.urlencoded({ extended: false }));
    }
    
}

export default new App().xpress;