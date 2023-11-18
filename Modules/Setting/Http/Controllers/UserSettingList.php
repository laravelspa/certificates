<?php

namespace Modules\Setting\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\Setting\Entities\Setting;
use Modules\Setting\Transformers\SettingResource;
use Modules\User\Entities\User;

class UserSettingList extends Controller
{
    public function __invoke(User $user)
    {
        abort_if(!Gate::allows('list-user-setting'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        return $this->success(SettingResource::make(Setting::byUser($user->id)->first()));
    }
}
