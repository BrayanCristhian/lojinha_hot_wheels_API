
//injeta i exoress e utiliza a funçao de roteamento
const express = require('express');
const router = express.Router();
//injeta as funçoes de acesso ao banco de dados
const sql = require('../models/autenticacao.model');
//injeta as funçoes de criptografia do sha1
const sha1 = require('sha1');

//cria um end point para autenticar o usuario
router.post('/autenticar',(req,res)=>{
    //armazena os dados do body em uma variavel
    //para ficar mais legivel
    let requisicao = req.body;
    //critografa a senha utilizando sha1
    requisicao.senha = sha1(requisicao.senha);
    //executa a funçao para testar o acesso do usuario
    sql.autenticaUsuario(requisicao.login,requisicao.senha)
    .then((resposta)=>{
        console.log(resposta)
        //pega a resposta da funçao e verifica se é um erro
        if(resposta instanceof Error){
            //se for um erro envia o status 500 com o erro (erro no servidor)
            res.status(500).json(resposta);
            return;
        }
        //verifica se o tamanho da resposta é 1 (um usuario)
        if(resposta.length != 1){
            //caso negativo, envia status 401 (nao autorizado)
            res.status(401).json({mensagem:'Usuário não autorizado'})
            return;
        }
        //envia o status 200 (ok)
        res.status(200).json(resposta);
    })
})

//endpont temporario para geraçao de senha criptografada
router.post('/geraSenhaCripto',(req,res)=>{
    //guarda a senha em uma variavel
    let senha = req.body.senha;
    //verifica se a senha nao e vazia
    if(!senha || senha == ''){
        res.status(400).json({mensagem:'Senha vazia'})
        return;
    }
    senha = sha1(senha);
    res.status(201).json({senha})
})








module.exports = router;