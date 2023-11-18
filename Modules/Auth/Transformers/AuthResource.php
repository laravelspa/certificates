<?php

namespace Modules\Auth\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Linkable\Transformers\LinkableResource;
use Modules\Upload\Transformers\UploadResource;

class AuthResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'email' => $this->email,
            'avatar' => $this->whenLoaded('media') && count($this->whenLoaded('media')) ? (new UploadResource($this->getFirstMedia('users')))->additional(['conversion' => 'avatar'])
                : config('upload.default_image'),
        ];
    }
}
