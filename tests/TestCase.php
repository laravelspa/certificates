<?php

namespace Tests;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Gate;
use Modules\Category\Entities\Category;
use Modules\Contact\Entities\Contact;
use Modules\Location\Entities\Location;
use Modules\Permission\Entities\Permission;
use Modules\Role\Entities\Role;
use Modules\Setting\Entities\Setting;
use Modules\Team\Entities\Team;
use Modules\User\Entities\User;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, RefreshDatabase;

    public function setupCompleted()
    {
        return Setting::create(
            [
                'key' => 'system_setup_completed',
                'value' => 1
            ]
        );
    }

    public function createUsers($num = 1, $args = [])
    {
        return User::factory($num)->create($args);
    }

    public function createTeams($num = 1, $args = [])
    {
        return Team::factory($num)->create($args);
    }

    public function createContact($args = [])
    {
        return Contact::factory()->create($args);
    }

    public function createLocation($args = [])
    {
        return Location::factory()->create($args);
    }

    public function createSettings($num = 1, $args = [])
    {
        return Setting::factory($num)->create($args);
    }
    public function createCategories($num = 1, $args = [])
    {
        return Category::factory($num)->create($args);
    }

    public function mockPermissionsWithGates($user)
    {
        $modules = [
            'user' => 'users',
            'category' => 'categories',
        ];

        $permissions = [
            'Create' => 'create-',
            'Edit' => 'edit-',
            'Show' => 'show-',
            'Delete' => 'delete-',
            'Import File' => 'import-file-',
            'Export File' => 'export-file-',
            'Bulk Delete' => 'bulk-delete-'
        ];

        $permissionsArray = [];

        foreach ($modules as $keyMod => $module) {
            foreach ($permissions as $keyPer => $permission) {
                if ($permission === 'list-' || $permission === 'delete-multiple-') {
                    $permissionsArray[] = [
                        'name' => $keyPer . ' ' . ucwords($module),
                        'slug' => $permission . $module,
                        'guard_name' => 'User'
                    ];
                } else {
                    $permissionsArray[] = [
                        'name' =>  $keyPer . ' ' . ucwords($keyMod),
                        'slug' => $permission . $keyMod,
                        'guard_name' => 'User'
                    ];
                }
            }
        }
        $permissionsArray[] = [
            'name' =>  'Create or Update System Setting',
            'slug' => 'create-or-update-system-setting',
            'guard_name' => 'User',
        ];
        $permissionsArray[] = [
            'name' =>  'Show System Setting',
            'slug' => 'show-system-setting',
            'guard_name' => 'User'
        ];

        $permissionsArray[] = [
            'name' =>  'Create or Update User Setting',
            'slug' => 'create-or-update-user-setting',
            'guard_name' => 'User',
        ];
        $permissionsArray[] = [
            'name' =>  'Show User Setting',
            'slug' => 'show-user-setting',
            'guard_name' => 'User'
        ];
        Permission::insert($permissionsArray);
        $permissions = Permission::all();
        $roleAdmin = Role::create([
            'name' => 'Admin',
            'slug' => 'admin'
        ]);
        $roleSales = Role::create([
            'name' => 'Sales',
            'slug' => 'sales'
        ]);
        $roleAdmin->permissions()->attach($permissions);
        $user->roles()->attach($roleAdmin);
        foreach ($permissions as $permission) {
            Gate::define($permission->slug, function ($user) use ($permission) {
                return $user->hasPermissionsTo($permission->slug);
            });
        }
    }
}
