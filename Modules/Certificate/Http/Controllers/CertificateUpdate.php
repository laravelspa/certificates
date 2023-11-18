<?php

namespace Modules\Certificate\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Modules\Certificate\Entities\Certificate;
use Modules\Certificate\Http\Requests\UpdateCertificateRequest;
use Modules\Upload\Http\Controllers\ImagesAssign;

class CertificateUpdate extends Controller
{
    public function __invoke(UpdateCertificateRequest $request, Certificate $certificate)
    {
        try {
            $request = $request->validated();
            $certificate = DB::transaction(function () use ($certificate, $request) {

                $certificate->update($request);

                return $certificate;
            });
            return $this->success(__('status.updated', ['name' => $certificate["serial_number"], 'module' => __('modules.certificate')]));
        } catch (\Illuminate\Database\QueryException $e) {
            $this->error(__('status.update_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            $this->error(trans('status.update_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
