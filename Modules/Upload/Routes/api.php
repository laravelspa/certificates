<?php

use Modules\Upload\Http\Controllers\ImageDestroy;
use Modules\Upload\Http\Controllers\ImagesReorder;
use Modules\Upload\Http\Controllers\ImageUpload;

Route::middleware('auth:sanctum')->prefix('v1')->group(function () {
    Route::post('/uploads', ImageUpload::class)->name('image.upload');
    Route::put('/uploads/reorder', ImagesReorder::class)->name('images.reorder');
    Route::delete('/uploads/destroy', ImageDestroy::class)->name('image.destroy');
});
