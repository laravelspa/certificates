<?php

namespace Modules\Certificate\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Modules\Certificate\Entities\Certificate;

class CertificateBulkDestroy extends Controller
{
    public function __invoke(Request $request)
    {
        abort_if(Gate::denies('bulk-delete-certificate'), Response::HTTP_FORBIDDEN, __('permission::messages.gate_denies'));
        try {
            Certificate::whereIn('id', $request->ids)->delete();
            return $this->success(__('status.deleted_selected_success'));
        } catch (\Illuminate\Database\QueryException $e) {
            return $this->error(__('status.delete_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            return $this->error(__('status.delete_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
