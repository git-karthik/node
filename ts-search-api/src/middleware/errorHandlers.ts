import { NextFunction, Request, Response, Router } from "express";
import * as Errorhandler from "../utils/Errorhandler";

const handle404Error = (router: Router) => {
    router.use((req: Request, res: Response) => {
        Errorhandler.notFoundError();
    });
};

const handleClientError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        Errorhandler.clientError(err, res, next);
    });
};

const handleServerError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        Errorhandler.serverError(err, res, next);
    });
};

export default [handle404Error, handleClientError, handleServerError];
