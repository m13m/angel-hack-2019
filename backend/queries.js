const Pool = require('pg').Pool
const pool = new Pool({
  user: 'angelhack',
  host: 'angelhack.c1xpmmjzmrsd.ap-south-1.rds.amazonaws.com',
  database: 'maqbool',
  password: 'angelhack',
  port: 5432,
  /*idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,*/
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM angelhack', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



module.exports = {
  getUsers
}
