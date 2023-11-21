<?php

namespace Modules\Role\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\Role\Entities\Role;
use Modules\Role\Transformers\RoleResource;

class RoleShow extends Controller
{
    public function __invoke(Role $role)
    {
        abort_if(!Gate::any(['show-role', 'edit-role']), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        return RoleResource::make($role->load(['permissions:name']));
    }
}
