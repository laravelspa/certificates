<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Modules\Auth\Http\Requests\AuthRequest;
use Modules\User\Entities\User;

class LogoutAction extends Controller
{
  public function __invoke(Request $request)
  {
    // $request->user()->currentAccessToken()->delete();
    if(! $request->user()) {
      return $this->error(['message' => trans('auth::auth.no_auth_user')]);
    }
    $request->user()->tokens()->delete();
    return $this->success([
      'message' => trans('auth::auth.logout', ['user' => auth()->user()->username])
    ], Response::HTTP_OK);
  }
}
