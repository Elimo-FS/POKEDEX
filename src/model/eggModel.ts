import pool from "../configs/database/db_connect";

export class Egg {
    static Selector(element: string | number ): string {
        let select: string | number;
        Number(element) ? select = 'id' : select = 'identifier'
        return select
    }

    static getInfoEgg(req: string): string {;
        const getType = `SELECT ${req} FROM egg_groups`
        return getType
    } 
    static getInfoEggElement(info: string, element: string | number): string {
        const getMoveElement: string = this.getInfoEgg(info) + ` WHERE ${this.Selector(element)} LIKE '${element}'`
        return getMoveElement
    } 

}

export const allEgg = async () => await pool.query(`${Egg.getInfoEgg('*')};`);
export const idEgg = async () => await pool.query(`${Egg.getInfoEgg('id')};`);
export const identifierEgg = async () => await pool.query(`${Egg.getInfoEgg('identifier')};`);
export const identifierEggFind = async (element: string | number) => await pool.query(`${Egg.getInfoEggElement('*', element)};`);
