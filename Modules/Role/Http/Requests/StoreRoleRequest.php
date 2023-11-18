<?php

namespace Modules\Role\Http\Requests;

use App\Traits\ValidationErrorResponseTrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class StoreRoleRequest extends FormRequest
{
    use ValidationErrorResponseTrait;
    public function rules()
    {
        return [
            'name'  => ['required', 'string', 'min:4', 'max:100', Rule::unique('roles', 'name')->whereNull('deleted_at')->ignore($this->role)],
            'permissions'   => ['required', 'array'],
        ];
    }

    public function authorize()
    {
        return Gate::allows('create-role');
    }
}
