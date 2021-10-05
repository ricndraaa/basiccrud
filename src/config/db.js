const {Client} = require('pg')

const connection = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'db_latihan',
    password: 'esteric55',
    port: 5432,
  })

  connection.connect();

  module.exports = connection;