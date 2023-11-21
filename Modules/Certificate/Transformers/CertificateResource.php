<?php

namespace Modules\Certificate\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Upload\Transformers\UploadResource;

class CertificateResource extends JsonResource
{
    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'serial_number' => $this->serial_number,
            'date' => $this->date,
            'facility_name' => $this->facility_name,
            'facility_activity' => $this->facility_activity,
            'facility_address' => $this->facility_address,
            'mobile' => $this->mobile,
            'commercial_register' => $this->commercial_register,
            'internal_cameras' => $this->internal_cameras,
            'external_cameras' => $this->external_cameras,
            'recording_device' => $this->recording_device,
            'recording_duration' => $this->recording_duration,
            'storage_disk' => $this->storage_disk,
            'display' => $this->display,
            'other_specifications' => $this->other_specifications,
            'no_civil_registry' => $this->no_civil_registry,
            'remarks' => $this->remarks,
            'created_by' => $this->whenLoaded('createdBy', $this->createdBy?->username),
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
