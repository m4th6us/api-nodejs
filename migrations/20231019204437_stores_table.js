/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable('stores', table => {
            table.increments('id').primary();
            table.string('name', 100).notNullable();
            table.string('description', 150).notNullable();
            table.string('cnpj', 18).notNullable().unique();
            table.boolean('status').notNullable();
            table.boolean('vitrine').notNullable();
            table.timestamps(true, true);
            table.integer('id_user').unsigned();
            table.foreign('id_user').references('users.id')
        })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('stores');
};