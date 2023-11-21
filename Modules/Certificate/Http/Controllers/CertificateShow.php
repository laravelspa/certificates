<?php

namespace Modules\Certificate\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\Certificate\Entities\Certificate;
use Modules\Certificate\Transformers\CertificateResource;

class CertificateShow extends Controller
{
    public function __invoke(Certificate $certificate)
    {
        abort_if(!Gate::any(['show-certificate', 'edit-certificate']), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        return CertificateResource::make($certificate);
    }
}
