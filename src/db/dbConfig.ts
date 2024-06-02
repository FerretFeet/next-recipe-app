//load and initialize the library
import pgPromise from "pg-promise";
// const pgp = require('pg-promise')()
// import pgp from "pg-promise";

//prepare connection details
const connectionString =
  "postgres://postgres:password@localhost:5432/recipe_app";

const initOptions = {};

const pgp = pgPromise({});

//create a new db instance
const db = pgp(connectionString);

export default db;
