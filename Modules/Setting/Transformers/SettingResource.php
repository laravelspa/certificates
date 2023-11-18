<?php

namespace Modules\Setting\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Upload\Transformers\UploadResource;

class SettingResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'key' => $this->key,
            'value' => $this->key === 'system_logo' ?
            ($this->whenLoaded('media') && count($this->whenLoaded('media'))
                ? (new UploadResource($this->getFirstMedia('settings')))->additional(['conversion' => 'system_logo'])
                : config('upload.default_image')) : $this->value,
            'user_id' => $this->user_id
        ];
    }
}
