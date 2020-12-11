
exports.up = function(knex) {
  return knex.schema.createTable('quotes', function(t) {
    t.increments('id').unsigned().primary();
    t.string('client_name').notNull();
    t.string('client_email').notNull();
    t.string('company_contact').notNull();
    t.string('point_of_departure').notNull();
    t.string('point_of_destination').notNull();
    t.decimal('number_of_passangers', 3, 0).notNull()
    t.string('transportation').notNull();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('quotes');
};
