import { Request, Response } from "express";
import logger from "../configs/logger/logger";
import { allEgg, identifierEggFind } from "../model/eggModel";

export const egg = (async (_: Request, res: Response) => {
    try {
        const [Egg] = await allEgg()
        res.json(Egg);
        logger.info("All the types of the pokemon from the pokedex")
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }
});

export const eggFind = (async (req: Request, res: Response) => {
        try {
            const [Egg] = await identifierEggFind(req.params.information)
            res.json(Egg);
            logger.info(`The type ${req.params.information} of the pokemon you selected`)
        } catch(err) {
            console.error(err);
            res.status(500).send('Server error')
            logger.error('There is a problem')
        }
    } 
);
