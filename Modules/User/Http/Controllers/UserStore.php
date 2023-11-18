<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Notifications\CreateUserNotification;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Modules\Permission\Entities\Permission;
use Modules\Role\Entities\Role;
use Modules\Setting\Entities\Setting;
use Modules\Upload\Http\Controllers\ImagesAssign;
use Modules\User\Entities\User;
use Modules\User\Http\Requests\StoreUserRequest;

class UserStore extends Controller
{
    public function __invoke(StoreUserRequest $request)
    {
        try {
            $request = $request->validated();
            $user = DB::transaction(function () use ($request) {
                $user = User::create(Arr::except($request, ['contacts', 'locations', 'avatar', 'permissions', 'roles']));
                
                if (isset($request['roles'])) {
                    $permissionsInRole = Role::with('permissions')->whereIn('id', $request['roles'])->get()->pluck('permissions')->flatten()->pluck('name')->toArray();;
                    $extraPermissions = array_diff($request['permissions'], $permissionsInRole);
                    
                    $user->givePermissionsTo($extraPermissions);
    
                    $user->roles()->attach($request['roles']);
                } else {
                    $user->roles()->detach();
                    if (isset($request['permissions'])) {
                        $user->givePermissionsTo($request['permissions']);
                    }
                }

                if (isset($request['contacts']) && count($request['contacts'])) {
                    $user->contacts()->createMany($request['contacts']);
                }

                if (isset($request['locations']) && count($request['locations'])) {
                    $user->locations()->createMany($request['locations']);
                }

                if (isset($request['avatar']) && !is_null($request['avatar']) && !array_key_exists('fake', $request['avatar'])) {
                    (new ImagesAssign)($request['avatar'], $user, 'users', 'avatar');
                }
                if (isset($request['send_notify']) && $request['send_notify'] === true  && Setting::checkConfigMail()) {
                    Notification::send($user, new CreateUserNotification());
                }
                return $user;
            });
            return $this->success(__('status.created', ['name' => $user['username'], 'module' => __('modules.user')]));
        } catch (\Illuminate\Database\QueryException $e) {
            $this->error(__('status.create_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            $this->error(trans('status.create_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
