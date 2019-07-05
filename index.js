const bcrypt = require('bcrypt');
const SQL = require('./sql')
const {promisify}= require('util')

// const otherPassword = 'password';
const bcryptHash = promisify(bcrypt.hash)
// const password = 'password';

async function hash(password){
    let hashword = await bcryptHash(password, 13);

    sql.insert(password, hashword)
}

hash('password')


let connectOptions = [
    'localhost',
    'root',
    'password',
    'test_schema'
]

let sql = new SQL(...connectOptions)

// bcrypt.hash(password, 13, (err, hash) => {
// if(err)throw err;
// console.log(hash)
//     // Store hash in your password DB.
//     bcrypt.compare(password, hash, function(err, res) {
//     // res == true
//    console.log(res)
    
// });
// });
