import sql from 'mssql'
const sqlConfig = {
	user: process.env.MSSQL_LOGIN,
	password: process.env.MSSQL_PASSWORD,
	database: process.env.MSSQL_DATABASE,
	server: process.env.MSSQL_HOST,
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true,
		trustServerCertificate: true,
	},
}
export default async function query(query) {
    try {
        const connection = await sql.connect(sqlConfig)
		const { recordset } = await connection.request().query(query)
        if (!recordset.length) return null
		return recordset
	} catch (e) {
		throw Error(e.message)
	} finally {
        await connection.close()
    }
}
