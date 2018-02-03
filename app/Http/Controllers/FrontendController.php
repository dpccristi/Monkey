<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class frontendController extends Controller
{
    function home()
    {

        $page = view('middleSection');
        return view('welcome', [
            'content' => $page
        ]);
    }

    function arrivals() {
        $page = view('lastSection');
        return view('lastSection', [
            'content' => $page
        ]);
    }


}
