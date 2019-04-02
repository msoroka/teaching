<?php

require __DIR__.'/../vendor/autoload.php';

use App\Format\Json;

$data = [
    "key" => "value",
    "another_key" => "another_value",
];

$json = new Json($data);

var_dump($json->convert());
$json->setData([
    "abstract" => "works",
]);
var_dump($json->convert());