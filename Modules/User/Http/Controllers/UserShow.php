<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\User\Entities\User;
use Modules\User\Transformers\UserResource;

class UserShow extends Controller
{
    public function __invoke(User $user)
    {
        abort_if(!Gate::any(['show-user', 'edit-user']), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        return UserResource::make($user->load(['roles:id', 'permissions:id,name', 'contacts', 'locations', 'media']));
    }
}
