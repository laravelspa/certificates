<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        // Cache::forget('systemsettings');
        return  view('application');
    }
}
