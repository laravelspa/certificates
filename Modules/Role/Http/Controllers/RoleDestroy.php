<?php

namespace Modules\Role\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\Role\Entities\Role;

class RoleDestroy extends Controller
{
    public function __invoke(Role $role)
    {
        abort_if(Gate::denies('delete-role'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        try {
            // $role->permissions()->detach();
            // $role->roles()->detach();
            // $role->contacts()->delete();
            // $role->locations()->delete();
            // $role->media()->delete();
            $role->delete();
            return $this->success(__('status.deleted', ['name' => $role->name, 'module' => __('modules.role')]));
        } catch (\Illuminate\Database\QueryException $e) {
            return $this->error(__('status.delete_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            return $this->error(__('status.delete_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
