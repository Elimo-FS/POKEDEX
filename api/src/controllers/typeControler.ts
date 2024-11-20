import { Request, Response } from "express";
import logger from "../configs/logger/logger";
import { allTypes, identifierTypesFind } from "../model/typeModel";

export const type = (async (req: Request, res: Response) => {
    try {
        const [type] = await allTypes();
        res.json(type);
        logger.info("All the types of the pokemon from the pokedex")
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }
});

export const typeFind = (async (req: Request, res: Response) => {
        try {
            const [Type] = await identifierTypesFind(req.params.information)
            res.json(Type);
            logger.info(`The type ${req.params.information} of the pokemon you selected`)
        } catch(err) {
            console.error(err);
            res.status(500).send('Server error')
            logger.error('There is a problem')
        }
    } 
);