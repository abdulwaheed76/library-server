// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: 'me',
      host: 'localhost',
      database: 'library',
      password: '1234',
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'library_migrations',
    },
  },
};
