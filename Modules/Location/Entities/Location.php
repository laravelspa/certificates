<?php

namespace Modules\Location\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Location extends Model
{
    use HasFactory;

    protected $fillable = ['country', 'city', 'state', 'zip', 'first_address', 'second_address'];

    public $timestamps = false;

    public function locationable()
    {
        return $this->morphTo();
    }
    
    protected static function newFactory()
    {
        return \Modules\Location\Database\factories\LocationFactory::new();
    }
}
