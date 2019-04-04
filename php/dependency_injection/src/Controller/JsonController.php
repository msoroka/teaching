<?php

namespace App\Controller;

use App\Service\Serializer;

class JsonController
{
    private $serializer;

    public function __construct(Serializer $serializer)
    {
        $this->serializer = $serializer;
    }

    public function index() {
        return $this->serializer->serialize([
            "action" => "index",
            "time" => time(),
        ]);
    }
}