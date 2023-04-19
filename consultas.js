const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'likeme',
    allowExitOnIdle: true
})
const getDate = async () => {
    const result = await pool.query("SELECT NOW()")
    console.log(result)
}
getDate()