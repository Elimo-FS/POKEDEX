import { Request, Response } from "express";
import logger from "../configs/logger/logger";
import { allItem, identifierItemFind } from "../model/itemModel";

export const item = (async (req: Request, res: Response) => {
    try {
        const [Item] = await allItem();
        res.json(Item);
        logger.info("All the types of the pokemon from the pokedex")
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }
});

export const itemFind = (async (req: Request, res: Response) => {
        try {
            const [Item]: any[] = await identifierItemFind(req.params.information)
            res.json(Item);
            logger.info(`The attack ${req.params.information} you selected`)
        } catch(err) {
            console.error(err);
            res.status(500).send('Server error')
            logger.error('There is a problem')
        }
    } 
);