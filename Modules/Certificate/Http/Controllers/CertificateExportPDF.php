<?php

namespace Modules\Certificate\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Modules\Certificate\Entities\Certificate;
use PDF;

class CertificateExportPDF extends Controller
{
    public function __invoke(Certificate $certificate)
    {
        try {
            $pdf = PDF::loadView('pdf.certificate', compact('certificate'));

            return $pdf->stream('document.pdf');
        } catch (\Illuminate\Database\QueryException $e) {
            return $this->error(__('status.pdf_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            return $this->error(__('status.pdf_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
