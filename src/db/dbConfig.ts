//load and initialize the library
import pgPromise from "pg-promise";
// const pgp = require('pg-promise')()
// import pgp from "pg-promise";

//prepare connection details
// const cn = 'postgres://postgres:password@localhost:5432/recipe_app'
const connectionString =
  "postgres://postgres:password@localhost:5432/recipe_app";

const initOptions = {};

const pgp = pgPromise({});

//create a new db instance
//@ts-ignore  THIS WORKS AND I DONT FEEL LIKE TAKING THE TIME TO TYPESCRIPT IT
const db = pgp(connectionString);

// async function temp() {
//     //@ts-ignore
//     const x = await db.many('SELECT * FROM recipe');
//     return x;
// }
// const tempvar = temp();
// console.log(tempvar);
// setTimeout(() => {
//     console.log(tempvar);
// }, 1000);

// console.log(db);
//export for shared use
export default db;
// module.exports = db;
