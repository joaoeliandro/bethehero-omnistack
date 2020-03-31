
exports.up = (knex) => {
    return knex.schema.createTable('incidents', (table) => {
        table.string('id').primary();
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.decimal('valor').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('incidents');
};
