export class Add {
    static selector(element: string | number ): string {
        let select: string | number;
        Number(element) ? select = 'id' : select = 'identifier';
        return select;
    }

    static addPokemons(): string {
        const query = `INSERT INTO pokemon (id, identifier, species_id, height, weight, base_experience, \`order\`, is_default) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
        return query;
    }

    static delPokemons(info: string | number): string {
        const query = `DELETE FROM pokemon WHERE ${this.selector(info)} = ${info};`;
        return query;
    }
    // static upPokemons( info: string | number, id: number, identifier: string, species_id: number, height: number, weight: number, base_experience: number, order: number, is_default: number ) {
    //     const query = `UPDATE pokemon SET 'id' = ${id}, 'identifier' = ${identifier}, 'species_id' = ${species_id}, 'height' = ${height}, 'weight' = ${weight}, 'base_experience' = ${base_experience}, '\`order\`' = ${order}, 'is_default' = ${is_default} WHERE ${this.selector(info)} = ${info};`
    //     return query
    // }
}