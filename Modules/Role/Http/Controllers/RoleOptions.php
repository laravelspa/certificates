<?php

namespace Modules\Role\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Role\Entities\Role;
use Modules\Role\Transformers\RoleResource;

class RoleOptions extends Controller
{
    public function __invoke()
    {
        return RoleResource::collection(Role::with('permissions:id,name')->get());   
    }
}
