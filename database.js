import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5799052',
    password: 'dJJuaNh6Ti',
    database: 'sql5799052'
}).promise()

export async function create(Fname, Lname, phone, email, date, service, description) {
    const result = await pool.query(`
        INSERT INTO Appts (\`First Name\`, \`Last Name\`, \`Phone\`, \`Email\`, \`Date\`, \`Service\`, \`Description\`) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [Fname, Lname, phone, email, date, service, description]
    );
    return result;
}

//const Appointments = await GetAppts("2021-10-26");
