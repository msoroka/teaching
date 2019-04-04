<?php

namespace App\Format;

abstract class BaseFormat implements FormatInterface
{
    protected $data;

    public function getData()
    {
        return $this->data;
    }

    public function setData($data): void
    {
        $this->data = $data;
    }

    public abstract function convert(): string;
}