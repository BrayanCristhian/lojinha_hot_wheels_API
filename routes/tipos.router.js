//injeta i exoress e utiliza a funçao de roteamento
const express = require('express');
const router = express.Router();
//injeta as funçoes de acesso ao banco de dados
const sql = require('../models/tipos.model');

router.get('/todos',(req,res)=>{
    sql.getTodos().then((resposta)=>{
        if(resposta instanceof Error){
            res.status(500).json(resposta)
            return;
        }
        res.status(200).json(resposta)
    })
})
module.exports=router