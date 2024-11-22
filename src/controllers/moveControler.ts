import { Request, Response } from "express";
import logger from "../configs/logger/logger";
import { allMoves, identifierMoveFind } from "../model/moveModel";

export const move = (async (_: Request, res: Response) => {
    try {
        const [Move] = await allMoves();
        res.json(Move);
        logger.info("All the types of the pokemon from the pokedex")
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }
});

export const moveFind = (async (req: Request, res: Response) => {
        try {
            const [Move]: any[] = await identifierMoveFind(req.params.information)
            res.json(Move);
            logger.info(`The attack ${req.params.information} you selected`)
        } catch(err) {
            console.error(err);
            res.status(500).send('Server error')
            logger.error('There is a problem')
        }
    } 
);