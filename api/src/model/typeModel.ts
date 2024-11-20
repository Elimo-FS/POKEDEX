import pool from "../configs/database/db_connect";

export class Type {
    static Selector(element: string | number ): string {
        let select: string | number;
        Number(element) ? select = 'id' : select = 'identifier'
        return select
    }

    static getInfoType(req: string): string {;
        const getType = `SELECT ${req} FROM types`
        return getType
    }
    
    static getInfoTypeElement(info: string, element: string | number): string {
        const getTypeElement: string = this.getInfoType(info) + ` WHERE ${this.Selector(element)} LIKE '${element}'`
        return getTypeElement
    } 

}

export const allTypes = async () => await pool.query(`${Type.getInfoType('*')};`);
export const idTypes = async () => await pool.query(`${Type.getInfoType('id')};`);
export const identifierTypes = async () => await pool.query(`${Type.getInfoType('identifier')};`);
export const identifierTypesFind = async (element: string | number) => await pool.query(`${Type.getInfoTypeElement('*', element)};`);
