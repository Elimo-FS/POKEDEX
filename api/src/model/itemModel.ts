import pool from "../configs/database/db_connect";

export class Item {
    static Selector(element: string | number ): string {
        let select: string | number;
        Number(element) ? select = 'id' : select = 'identifier'
        return select
    }

    static getInfoItem(req: string): string {;
        const getType = `SELECT ${req} FROM items`
        return getType
    } 
    static getInfoItemElement(info: string, element: string | number): string {
        const getMoveElement: string = this.getInfoItem(info) + ` WHERE ${this.Selector(element)} LIKE '${element}'`
        return getMoveElement
    } 

}

export const allItem = async () => await pool.query(`${Item.getInfoItem('*')};`);
export const idItem = async () => await pool.query(`${Item.getInfoItem('id')};`);
export const identifierItem = async () => await pool.query(`${Item.getInfoItem('identifier')};`);
export const identifierItemFind = async (element: string | number) => await pool.query(`${Item.getInfoItemElement('*', element)};`);
