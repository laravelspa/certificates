<?php

namespace Modules\Setting\Http\Requests;

use App\Traits\ValidationErrorResponseTrait;
use Illuminate\Foundation\Http\FormRequest;

class SettingCreateRequest extends FormRequest
{
    use ValidationErrorResponseTrait;

    public function rules()
    {
        return [
            '*.key' => ['required'],
            '*.value' => ['nullable'],
        ];
    }

    public function authorize()
    {
        return true;
    }
}
