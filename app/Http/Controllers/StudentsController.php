<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use function MongoDB\BSON\toJSON;

class StudentsController extends Controller
{
    public function index()
    {
        $data = ['name'=>'Imran','age'=>25];


    }
}
