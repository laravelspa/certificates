<?php

namespace Modules\Role\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'remarks' => $this->remarks,
            'permissions' => $this->relationLoaded('permissions') ? $this->permissions->pluck('name') : [],
        ];
    }
}
