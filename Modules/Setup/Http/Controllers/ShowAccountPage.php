<?php

namespace Modules\Setup\Http\Controllers;

use Illuminate\Contracts\View\View;

class ShowAccountPage {
  public function __invoke(): View 
  {
    return view('setup::setup.account');
  }
}