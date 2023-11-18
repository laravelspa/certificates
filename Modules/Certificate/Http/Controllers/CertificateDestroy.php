<?php

namespace Modules\Certificate\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\Certificate\Entities\Certificate;

class CertificateDestroy extends Controller
{
    public function __invoke(Certificate $certificate)
    {
        abort_if(Gate::denies('delete-certificate'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        try {
            $certificate->delete();
            return $this->success(__('status.deleted', ['name' => $certificate->serial_number, 'module' => __('modules.certificate')]));
        } catch (\Illuminate\Database\QueryException $e) {
            return $this->error(__('status.delete_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            return $this->error(__('status.delete_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
