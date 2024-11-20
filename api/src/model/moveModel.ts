import pool from "../configs/database/db_connect";

export class Move {
    static Selector(element: string | number ): string {
        let select: string | number;
        Number(element) ? select = 'id' : select = 'identifier'
        return select
    }

    static getInfoMove(req: string): string {;
        const getType = `SELECT ${req} FROM moves`
        return getType
    } 
    static getInfoMoveElement(info: string, element: string | number): string {
        const getMoveElement: string = this.getInfoMove(info) + ` WHERE ${this.Selector(element)} LIKE '${element}'`
        return getMoveElement
    } 

}

export const allMoves = async () => await pool.query(`${Move.getInfoMove('*')};`);
export const idMoves = async () => await pool.query(`${Move.getInfoMove('id')};`);
export const identifierMoves = async () => await pool.query(`${Move.getInfoMove('identifier')};`);
export const identifierMoveFind = async (element: string | number) => await pool.query(`${Move.getInfoMoveElement('*', element)};`);
