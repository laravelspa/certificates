<?php

namespace Modules\Upload\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemporaryFiles extends Model
{
    use HasFactory;

    protected $fillable = ['folder', 'filename'];
}
