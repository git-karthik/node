import { NextFunction, Router } from "express";

type Wrapper = (router: Router) => void;

/**
 * This function is a helper which accepts the list
 * of middleware defined in ./middleware/index.js and express
 * @param middleware
 * @param router
 */
export const applyMiddleware = (middlewareWrappers: Wrapper[], router: Router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};

type Handler = (
    req: Request,
    res: Response,
    next: NextFunction,
) => Promise<void> | void;

interface Route {
    path: string;
    method: string;
    handler: Handler | Handler[];
}

export const applyRoutes = (routes: Route[], router: Router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        (router as any)[method](path, handler);
    }
};

