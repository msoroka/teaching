<?php

namespace App\Format;

interface FormatInterface
{
    public function convert(): string;
    public function getData();
    public function setData(array $data): void;
}