<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentencia = $bd->query("select nomb_emp, desc_detemp from t_empresas inner join t_detemp");
$empresas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($empresas);
