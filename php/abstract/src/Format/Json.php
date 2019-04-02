<?php

namespace App\Format;

class Json extends BaseFormat
{
    public function convert()
    {
        return json_encode($this->getData());
    }
}