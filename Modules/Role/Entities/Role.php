<?php

namespace Modules\Role\Entities;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Permission\Entities\Permission;
use Modules\Permission\Traits\HasPermissions;

class Role extends Model
{
    use SoftDeletes, HasPermissions, Searchable;

    protected $fillable = ['name', 'slug', 'remarks', 'guard_name'];

    public static function searchable()
    {
        return ['name'];
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'role_has_permissions');
    }

    public function hasPermissionsTo(...$permissions)
    {
        return $this->permissions()->whereIn('name', $permissions)->count();
    }
}
