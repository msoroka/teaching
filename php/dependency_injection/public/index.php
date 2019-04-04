<?php

require __DIR__.'/../vendor/autoload.php';

use App\Container;
use App\Controller\JsonController;
use App\Format\Json;
use App\Service\Serializer;

$data = [
    "first_name" => "John",
    "last_name" => "Doe",
];

$container = new Container();

$container->addService("format.json", function() use ($container) {
    return new Json();
});

$container->addService("serializer.json", function() use ($container) {
   return new Serializer($container->getService("format.json"));
});

$container->addService("controller.json", function () use ($container) {
    return new JsonController($container->getService("serializer.json"));
});

var_dump($container);
var_dump($container->getService("controller.json")->index());
