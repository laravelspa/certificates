<?php

namespace Modules\Certificate\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Modules\Upload\Http\Controllers\ImagesAssign;
use Modules\Certificate\Entities\Certificate;
use Modules\Certificate\Http\Requests\StoreCertificateRequest;

class CertificateStore extends Controller
{
    public function __invoke(StoreCertificateRequest $request)
    {
        try {
            $request = $request->validated();
            $certificate = DB::transaction(function () use ($request) {
                $certificate = Certificate::create($request);

                $certificate->serial_number = sprintf('%07d', $certificate->id);
                $certificate->user_id = auth()->check() ? auth()->id() : null;
                $certificate->save();

                return $certificate;
            });
            return $this->success(__('status.created', ['name' => $certificate['facility_name'], 'module' => __('modules.certificate')]));
        } catch (\Illuminate\Database\QueryException $e) {
            $this->error(__('status.create_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            $this->error(trans('status.create_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
