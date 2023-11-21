<?php

namespace Modules\Certificate\Entities;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Certificate\Database\Factories\CertificateFactory;
use Modules\User\Entities\User;

class Certificate extends Model
{
    use HasFactory, Searchable, SoftDeletes;

    protected $fillable = [
        'serial_number',
        'date',
        'facility_name',
        'facility_activity',
        'facility_address',
        'mobile',
        'commercial_register',
        'internal_cameras',
        'external_cameras',
        'recording_device',
        'recording_duration',
        'storage_disk',
        'display',
        'other_specifications',
        'no_civil_registry',
        'remarks',
        'user_id'
    ];

    public static function searchable()
    {
        return ['facility_name', 'serial_number', 'commercial_register', 'mobile', 'created_at', 'createdBy.username'];
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    protected static function newFactory()
    {
        return CertificateFactory::new();
    }
}
