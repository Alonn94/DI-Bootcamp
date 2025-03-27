const knex = require('knex');


const PGHOST='ep-snowy-river-a5xnycd6-pooler.us-east-2.aws.neon.tech'
const PGDATABASE='Bootcamp'
const PGUSER='Bootcamp_owner'
const PGPASSWORD='npg_EP1Z7dezcALy'
const PGPORT = 5432

const db = knex ({
  client: "pg",
  connection: {
    user: PGUSER,
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: {rejectUnauthorized: false},
  },
});

module.exports = db;

async function getVersion() {
    const result = await db.raw('SELECT version()');
    console.log(result.rows);
}

getVersion();
