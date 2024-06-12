//load and initialize the library
import { createSingleton } from "@/lib/utils/singletonCreator";
import pgLib from "pg-promise";
// const pgp = require('pg-promise')()
// import pgp from "pg-promise";
// const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

interface IDatabaseScope {
  db: pgLib.IDatabase<any>;
  pgp: pgLib.IMain;
}

//prepare connection details
const connectionString = process.env.DB_CONNECTION_STRING;

const initOptions = {};

const pgp = pgLib(initOptions);

export function getDB(): IDatabaseScope {
  return createSingleton<IDatabaseScope>("my-db-space", () => {
    if (connectionString) {
      return {
        db: pgp(connectionString),
        pgp,
      };
    } else {
      throw Error("DB Connection string null");
    }
  });
}
