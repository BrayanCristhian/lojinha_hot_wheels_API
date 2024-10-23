//insere a conexao com o banco de dados dentro do modelo
const conexao = require('../database/connections');


//cria uma funcao assincroma para o modelo
//funcao de autenticacao requer usuario e senha
async function autenticaUsuario(usuario,senha){
    //utiliza estrutura de decisao try..catch para tentar
    //a conexao com o bancao de dados e execucao da query
    try{

        //executa a query e armazena a resposta em uma constante   
        const [exec] = await conexao.query(`
                select
                    id_usuario
                from tb_usuario
                where login = ? and senha = ?
            `,[usuario,senha])
        //retorna a resposta
            return exec;
    }catch(erro){
        //caso haja algum erro, coloca dentro da variavel erro
        //e usa a funcao return para retornar para o usuario
        return erro;
    }



}




module.exports = {

    autenticaUsuario
}