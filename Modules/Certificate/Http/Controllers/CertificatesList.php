<?php

namespace Modules\Certificate\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Modules\Certificate\Entities\Certificate;
use Modules\Certificate\Transformers\CertificateResource;
use Illuminate\Http\Response;

class CertificatesList extends Controller
{
    public function __invoke(Request $req)
    {
        // dd(sprintf('R%s/%s-%03d', 2022, 2023, 1));
        abort_if(!Gate::allows('list-certificate'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        $dir = $req->descending === 'true' ? 'desc' : 'asc';
        return CertificateResource::collection(Certificate::with(['createdBy:id,username'])->search($req->filter)
            ->orderBy($req->sortBy, $dir)
            ->paginate($req->rowsPerCertificate));
    }
}
