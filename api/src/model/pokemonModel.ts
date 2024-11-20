import pool from "../configs/database/db_connect";

export class Pokemon {
    static selector(element: string | number ): string {
        let select: string | number;
        Number(element) ? select = 'id' : select = 'identifier'
        return select
    }
    static getInfoPokemon(info: string): string {
        const getPokemon = `SELECT ${info} FROM pokemon`
        return getPokemon
    } 
    static getPokemonLinkType(info: string, ): string {
        const getType = `SELECT types.${info} FROM types INNER JOIN pokemon_types ON pokemon_types.type_id = types.id INNER JOIN pokemon ON pokemon.id = pokemon_types.pokemon_id`
        return getType
    } 
    static getPokemonLinkMove(info: string, ): string {
        const getMoves = `SELECT moves.${info} FROM moves INNER JOIN pokemon_moves ON pokemon_moves.move_id = moves.id INNER JOIN pokemon ON pokemon.id = pokemon_moves.pokemon_id`
        return getMoves
    } 
    static getPokemonLinkEgg(info: string, ): string {
        const getMoves = `SELECT egg_groups.${info} FROM egg_groups INNER JOIN pokemon_egg_groups ON egg_groups.id = pokemon_egg_groups.egg_group_id INNER JOIN pokemon ON pokemon.species_id = pokemon_egg_groups.species_id`
        return getMoves
    } 
    static getInfoPokemonElement(info: string, element: string | number): string {
        const getTypeElement: string = this.getInfoPokemon(info) + ` WHERE ${this.selector(element)} LIKE '${element}'`
        return getTypeElement
    } 
    static getInfoPokemonLinkTypeElement(info: string, element: string | number): string {
        const getTypeElement: string = this.getPokemonLinkType(info) + ` WHERE pokemon.${this.selector(element)} LIKE '${element}'`
        return getTypeElement
    } 
    static getInfoPokemonLinkMoveElement(info: string, element: string | number): string {
        const getMoveElement: string = this.getPokemonLinkMove(info) + ` WHERE pokemon.${this.selector(element)} LIKE '${element}' GROUP BY moves.identifier`
        return getMoveElement
    } 
    static getInfoPokemonLinkEggElement(info: string, element: string | number): string {
        const getEggElement: string = this.getPokemonLinkEgg(info) + ` WHERE pokemon.${this.selector(element)} LIKE '${element}' GROUP BY egg_groups.identifier`
        return getEggElement
    }
}

export const allPokemon = async () => await pool.query(`${Pokemon.getInfoPokemon('*')};`);
export const idPokemon = async () => await pool.query(`${Pokemon.getInfoPokemon('id')};`);
export const identifierPokemon = async () => await pool.query(`${Pokemon.getInfoPokemon('identifier')};`);
export const identifierPokemonFind = async (element: string | number) => await pool.query(`${Pokemon.getInfoPokemonElement('*', element)};`);
export const identifierPokemonTypeFind = async (source: string | number) => await pool.query(`${Pokemon.getInfoPokemonLinkTypeElement('*', source)};`);
export const identifierPokemonMoveFind = async (source: string | number) => await pool.query(`${Pokemon.getInfoPokemonLinkMoveElement('*', source)};`);
export const identifierPokemonEggFind = async (source: string | number) => await pool.query(`${Pokemon.getInfoPokemonLinkEggElement('*', source)};`);
