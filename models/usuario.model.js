const conexao = require('../database/connections');

async function addUsuario(dados){
    try{
        let [exec] = await conexao.query(`
            insert into tb_usuario(
                nome,
                sobrenome,
                email,
                senha,
                dt_nascimento,
                login,
                telefone,
                id_tipo
            ) values (
                ?,?,?,?,?,?,?,? 
            )
            `,[
                dados.nome,
                dados.sobrenome,
                dados.email,
                dados.senha,
                dados.dt_nascimento,
                dados.login,
                dados.telefone,
                dados.tipo
            ])
            return exec.affectedRows;
    }catch(e){
        return e;
    }
}




module.exports = {
    addUsuario
}