// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres/localhost/blainerichardson',
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

}
