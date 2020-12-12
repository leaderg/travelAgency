exports.up = function(knex) {
  return knex.schema.createTable('quotes', function(t) {
    t.increments('id').unsigned().primary();
    t.string('client_name').notNull();
    t.string('client_email').notNull();
    t.string('company_contact').nullable().default('Anonymous');
    t.string('point_of_departure').notNull();
    t.string('point_of_destination').notNull();
    t.string('departure_date').notNull();
    t.string('return_date').notNull();
    t.decimal('number_of_passengers', 3, 0).notNull()
    t.string('transportation').notNull();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('quotes');
};

// Storing date as string over datatime.
// Using Moment to parse strings on front end.
// YYYY-MM-DDTHH:mm:ssZ