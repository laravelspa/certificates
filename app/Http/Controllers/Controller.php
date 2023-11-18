<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    // Main Color
    const MAIN_COLOR = '#OOOOOO';
    // Gender
    const GENDER_MALE = 1;
    const GENDER_FEMALE = 2;
    const MALE = 'male';

    // Active Status
    const ACTIVE_ARRAY = ['active', 'yes', 'نشط'];
    const NOT_ACTIVE_ARRAY = ['not active', 'no', 'غير نشط'];

    // Math
    const DIVIDE = '/';
    const EXCLUSIVE = 1;

    // Barcode Types
    const BARCODE_TYPES = [
        ['id' => 1, 'name' => 'CODE128'],
        ['id' => 2, 'name' => 'CODE39'],
        ['id' => 3, 'name' => 'EAN8'],
        ['id' => 4, 'name' => 'EAN13'],
        ['id' => 5, 'name' => 'UPC'],
    ];

    // Tax Types
    const TAX_TYPES = [
        ['id' => 1, 'name' => 'exclusive'],
        ['id' => 2, 'name' => 'inclusive'],
    ];

    public function success($data, $status_code = Response::HTTP_OK)
    {
        return response()->json([
            'success' => true,
            'payload' => $data
        ], $status_code);
    }

    public function error($data, $status_code = Response::HTTP_BAD_REQUEST)
    {
        return response()->json([
            'success' => false,
            'payload' => $data
        ], $status_code);
    }
}
