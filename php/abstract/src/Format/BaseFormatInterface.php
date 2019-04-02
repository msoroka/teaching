<?php

namespace App\Format;

interface BaseFormatInterface
{
    public function convert();

    public function getData();

    public function setData($data);
}