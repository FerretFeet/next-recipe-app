//load and initialize the library
import pgPromise from "pg-promise";
// const pgp = require('pg-promise')()
// import pgp from "pg-promise";
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

//prepare connection details
const connectionString = DB_CONNECTION_STRING;

const initOptions = {};

const pgp = pgPromise({});

//create a new db instance
if (!connectionString) {
  throw new Error("DBConnectionString is null");
}
const db = pgp(connectionString);

export default db;
