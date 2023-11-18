<?php

namespace Modules\Role\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Role\Entities\Role;
use Modules\Role\Transformers\RoleResource;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class RolesList extends Controller
{
    public function __invoke(Request $req)
    {
        abort_if(!Gate::allows('list-role'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        $dir = $req->descending === 'true' ? 'desc' : 'asc';
        return RoleResource::collection(Role::search($req->filter)
        ->orderBy($req->sortBy, $dir)
        ->paginate($req->rowsPerPage));
    }
}
