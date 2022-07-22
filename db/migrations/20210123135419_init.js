// npx knex migrate:make init --migrations-directory db/migrations
exports.up = function (knex) {
  return knex.schema
    .createTable('student', (table) => {
      table.increments('id');
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable().unique();
      table.timestamps(true, true);
    })
    .createTable('book', table => {
      table.increments('id');
      table.string('book_name').notNullable();
      table.string('author_name').notNullable();
      table.string('date_of_borrow').notNullable();
      table.string('date_of_return').notNullable();
      table.string('borrow_by');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('student')
    .dropTable('book')
};
