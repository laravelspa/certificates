<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\User\Entities\User;

class UserDestroy extends Controller
{
    public function __invoke(User $user)
    {
        abort_if(Gate::denies('delete-user'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        try {
            // $user->permissions()->detach();
            // $user->roles()->detach();
            // $user->contacts()->delete();
            // $user->locations()->delete();
            // $user->media()->delete();
            $user->delete();
            return $this->success(__('status.deleted', ['name' => $user->username, 'module' => __('modules.user')]));
        } catch (\Illuminate\Database\QueryException $e) {
            return $this->error(__('status.delete_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            return $this->error(__('status.delete_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
