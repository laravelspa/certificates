<?php

use Modules\Certificate\Http\Controllers\CertificateBulkDestroy;
use Modules\Certificate\Http\Controllers\CertificateDestroy;
use Modules\Certificate\Http\Controllers\CertificateExportPDF;
use Modules\Certificate\Http\Controllers\CertificateImportCsv;
use Modules\Certificate\Http\Controllers\CertificateShow;
use Modules\Certificate\Http\Controllers\CertificatesList;
use Modules\Certificate\Http\Controllers\CertificateStore;
use Modules\Certificate\Http\Controllers\CertificateUpdate;

Route::middleware('auth:sanctum')->prefix('v1')->group(function () {
    Route::get('/certificates', CertificatesList::class)->name('certificates.index');
    Route::post('/certificates', CertificateStore::class)->name('certificates.store');
    Route::put('/certificates/{certificate}', CertificateUpdate::class)->name('certificates.update');
    Route::get('/certificates/{certificate}', CertificateShow::class)->name('certificates.show');
    Route::delete('/certificates/{certificate}', CertificateDestroy::class)->name('certificates.destroy');
    Route::post('/certificates/bulk_destroy', CertificateBulkDestroy::class)->name('certificates.bulk_destroy');
    Route::post('/certificates/import_csv', CertificateImportCsv::class)->name('certificates.import_csv');
    Route::post('/certificates/{certificate}/export_pdf', CertificateExportPDF::class)->name('certificates.import_csv');
});
