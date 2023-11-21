<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\User\Entities\User;
use Modules\User\Transformers\UserResource;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class UsersList extends Controller
{
    public function __invoke(Request $req)
    {
        abort_if(!Gate::allows('list-user'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        $dir = $req->descending === 'true' ? 'desc' : 'asc';
        return UserResource::collection(User::where('id', '!=', auth()->id())->with(['media'])->search($req->filter)
        ->orderBy($req->sortBy, $dir)
        ->paginate($req->rowsPerPage));
    }
}
