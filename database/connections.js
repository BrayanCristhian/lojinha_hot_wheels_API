const mysql = require('mysql2/promise');

const config = {
    host:'localhost',
    user:'root',
    password:'',
    database:'db_lojinha_hot_wheels'
}

const conexao = mysql.createPool(config);

module.exports = conexao;