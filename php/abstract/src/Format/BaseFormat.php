<?php

namespace App\Format;

abstract class BaseFormat implements BaseFormatInterface
{
    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public abstract function convert();

    public function getData()
    {
        return $this->data;
    }

    public function setData($data)
    {
        $this->data = $data;
    }
}