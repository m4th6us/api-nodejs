/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name', 60).notNullable();
        table.string('cpf', 14).notNullable();
        table.integer('level');
        table.timestamps(true, true);
  }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
