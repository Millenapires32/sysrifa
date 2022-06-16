<?php

//Realizar a conexão com o banco de dados 
include("../../conexao/conn.php");

//Obter a requisição para geração da tabela
$requestData = $_REQUEST;

//Obter as colunas que estão sendo requiridas 
$colunas = $requestData['colunas'];

//Preparar o comando sql para obter dos registros existentes no banco de dados
$sql = "SELECT ID, NOME FROM TIPO WHERE 1=1 ";

//Obter o total de registros existentes na tabela do banco de dados
$resultado = $pdo->query($sql);
$qtdeLinhas = $resultado->rowCount();

//Verificar se existe algum filtro determinado pelo usuario
$filtro = $requestData['search']['value'];
