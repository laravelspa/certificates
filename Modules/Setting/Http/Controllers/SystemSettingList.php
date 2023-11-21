<?php

namespace Modules\Setting\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Setting\Entities\Setting;
use Modules\Setting\Transformers\SettingResource;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class SystemSettingList extends Controller
{
    public function __invoke()
    {
        abort_if(!Gate::allows('list-system-setting'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        return SettingResource::collection(Setting::systemOnly()->get());
    }
}
