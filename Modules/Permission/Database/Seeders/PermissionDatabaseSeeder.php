<?php

namespace Modules\Permission\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Permission\Entities\Permission;
use Modules\Role\Entities\Role;
use Modules\User\Entities\User;

class PermissionDatabaseSeeder extends Seeder
{
    public function run()
    {
        $modules = [
            'user' => 'users',
            'certificate' => 'certificates',
            'role' => 'roles',
        ];

        $permissions = [
            'List' => 'list-',
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
                $permissionsArray[] = [
                    'name' =>  $keyPer . ' ' . ucwords($keyMod),
                    'slug' => $permission . $keyMod,
                    'guard_name' => ucwords($keyMod)
                ];   
            }
        }

        $permissionsArray[] = [
            'name' =>  'List Setting',
            'slug' => 'list-setting',
            'guard_name' => 'Setting',
        ];

        $permissionsArray[] = [
            'name' =>  'Update System Setting',
            'slug' => 'update-system-setting',
            'guard_name' => 'Setting',
        ];

        $permissionsArray[] = [
            'name' =>  'List System Setting',
            'slug' => 'list-system-setting',
            'guard_name' => 'Setting'
        ];

        $permissionsArray[] = [
            'name' =>  'Update User Setting',
            'slug' => 'update-user-setting',
            'guard_name' => 'Setting',
        ];
        $permissionsArray[] = [
            'name' =>  'List User Setting',
            'slug' => 'list-user-setting',
            'guard_name' => 'Setting'
        ];

        $permissionsArray[] = [
            'name' =>  'Show Profile',
            'slug' => 'show-profile',
            'guard_name' => 'Profile',
        ];

        $permissionsArray[] = [
            'name' =>  'Update Profile',
            'slug' => 'update-profile',
            'guard_name' => 'Profile',
        ];


        Permission::insert($permissionsArray);
        $permissions = Permission::all();
        $roleAdmin = Role::create([
            'name' => 'Admin',
            'slug' => 'admin'
        ]);
        // $roleWriter = Role::create([
        //     'name' => 'Writer',
        //     'slug' => 'writer'
        // ]);
        $roleAdmin->permissions()->attach($permissions);
        // $per = $permissions->pluck('id', 'slug');
        // dd($per->only(['show-post', 'create-post', 'edit-post']));
        // $roleWriter->permissions()->attach($per->only(['show-post', 'create-post', 'edit-post']));

        // $user = User::where('username', 'admin')->first();
        // dd($user);
        // $user->roles()->attach($roleAdmin);
    }
}
