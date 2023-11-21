<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\Auth\Transformers\ProfileResource;
use Modules\User\Entities\User;

class ProfileShow extends Controller
{
    public function __invoke()
    {
        abort_if(!Gate::any(['show-profile', 'edit-profile']), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        $profile = User::with(['contacts', 'locations', 'media'])
            ->where('id', auth()->id())
            ->first();

        return ProfileResource::make($profile);
    }
}
