<?php

namespace App\Format;

class Json extends BaseFormat implements FormatInterface
{
    public function convert(): string
    {
        return json_encode($this->data);
    }
}