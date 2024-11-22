import { Request, Response } from "express";
import logger from "../configs/logger/logger";
import pool from "../configs/database/db_connect";

const port = process.env.PORT;

export const home = ((req: Request, res: Response) => {
    res.send("Welcome to the pokedex");
    logger.info(`Server start on port ${port}`)
});