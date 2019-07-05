const mysql = require('mysql')

class SQL {
constructor(host, user, password, database){
    this.connection=mysql.createConnection({
        host:host,
        user:user,
        password:password,
        database:database
    })
}


insert(password, hashword){
    this.connection.query(`INSERT INTO hash SELECT '${password}', '${hashword}';`,(error, results)=>{
        if (error)throw error;
    })
}
}

module.exports = SQL