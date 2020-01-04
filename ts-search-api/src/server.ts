import express from "express";
import http from "http";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import { applyMiddleware, applyRoutes } from "./utils";

process.on("uncaughtException", (err) => {
    console.log(err);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);
const port = process.env.PORT || 3000;

const server = http.createServer(router).listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

