const connections = require('../database/connections')
async function getTodos(){
    try{
        let[rows]=await connections.query('select * from tb_cor')
        return rows
    }catch(e){
        return e
    }
}
module.exports={getTodos
}