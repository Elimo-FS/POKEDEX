import { Add } from '../model/modifierModel';
import { Request, Response } from "express";
import logger from "../configs/logger/logger";
import { allPokemon, identifierPokemonEggFind, identifierPokemonFind, identifierPokemonMoveFind, identifierPokemonTypeFind } from "../model/pokemonModel";
import pool from '../configs/database/db_connect';

export const pokemon = (async (req: Request, res: Response) => {
    try {
        const [Pokemon] = await allPokemon();
        res.json(Pokemon);
        logger.info("All the types of the pokemon from the pokedex")
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }
});

export const pokemonFind = (async (req: Request, res: Response) => {
        try {
            const [Pokemon] = await identifierPokemonFind(req.params.information)
            const [Type] = await identifierPokemonTypeFind(req.params.information)
            const [Move] = await identifierPokemonMoveFind(req.params.information)
            const [Egg] = await identifierPokemonEggFind(req.params.information)
            res.json({Pokemon, Type, Move, Egg});
            logger.info(`The type ${req.params.information} of the pokemon you selected`)
        } catch(err) {
            console.error(err);
            res.status(500).send('Server error')
            logger.error('There is a problem')
        }
    } 
);

export const pokemonTypeFind = (async (req: Request, res: Response) => {
    try {
        const [pokemon] = await identifierPokemonFind(req.params.element)
        const [Type] = await identifierPokemonTypeFind(req.params.element)
        res.json({pokemon, Type});
        logger.info(`The type ${req.params.element} of the pokemon you selected`)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }
} 
);

export const pokemonMoveFind = (async (req: Request, res: Response) => {
    try {
        const [pokemon] = await identifierPokemonFind(req.params.element)
        const [Move] = await identifierPokemonMoveFind(req.params.element)
        res.json({pokemon, Move});
        logger.info(`The type ${req.params.element} of the pokemon you selected`)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }
} 
);

export const pokemonEggFind = (async (req: Request, res: Response) => {
    try {
        const [pokemon] = await identifierPokemonFind(req.params.element)
        const [Egg] = await identifierPokemonEggFind(req.params.element)
        res.json({pokemon, Egg});
        logger.info(`The type ${req.params.element} of the pokemon you selected`)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }
}
);

export const addPocket = ( async (req: Request, res: Response) => {
    try {
        const { id, identifier, species_id, height, weight, base_experience, order, is_default } = req.body;
        const query: string = `${Add.addPokemons()}`;
        await pool.query(query, [ id, identifier, species_id, height, weight, base_experience, order, is_default ]);
        res.status(201).json({
            message: 'Pokemon added successfully'
        });
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }});

export const delPocket = ( async (req: Request, res: Response) => {
    try {
        await pool.query(`${Add.delPokemons(req.params.information)}`);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
        logger.error('There is a problem')
    }});

// export const upPocketiden = ( async (req: Request, res: Response) => {
//     try {
//         const { id, identifier, species_id, height, weight, base_experience, order, is_default } = req.body;
//         const query: string = `${Add.upPokemons(req.params.info, req.params.element1, req.params.element2, req.params.element3, req.params.element4, req.params.element5, req.params.element6, req.params.element7, req.params.element8)}`;
//         await pool.query(query, [ id, identifier, species_id, height, weight, base_experience, order, is_default ]);
//         res.status(201).json({
//             message: 'Pokemon update successfully'
//         });
//     } catch(err) {
//         console.error(err);
//         res.status(500).send('Server error')
//         logger.error('There is a problem')
//     }});