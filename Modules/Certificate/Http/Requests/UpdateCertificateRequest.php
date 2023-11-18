<?php

namespace Modules\Certificate\Http\Requests;

use App\Traits\ValidationErrorResponseTrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class UpdateCertificateRequest extends FormRequest
{
    use ValidationErrorResponseTrait;
    public function rules()
    {
        return [
            "date"                      => ['required'],
            "facility_name"             => ['required'],
            "facility_activity"         => ['required'],
            "facility_address"          => ['required'],
            "mobile"                    => ['required'],
            "commercial_register"       => ['required'],
            "no_civil_registry"         => ['required'],
            "internal_cameras"          => ['required'],
            "external_cameras"          => ['required'],
            "recording_device"          => ['required'],
            "recording_duration"        => ['required'],
            "storage_disk"              => ['required'],
            "display"                   => ['required'],
            "other_specifications"      => ['required'],
            
            'remarks'                   => ['string', 'nullable'],
        ];
    }

    public function authorize()
    {
        return Gate::allows('edit-certificate');
    }
}
