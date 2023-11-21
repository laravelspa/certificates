<?php

namespace Modules\User\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Permission\Entities\Permission;
use Modules\User\Entities\User;

class UserDatabaseSeeder extends Seeder
{
    public function run()
    {
        $user = User::create([
            'username'      => 'admin',
            'firstname'     => 'Admin',
            'lastname'      => 'Admin',
            'email'         => 'admin@admin.com',
            'is_active'        => true,
            'is_owner'        => true,
            'send_notify'        => true,
            'password'      => 'Passwordsecret1@',
            'gender'        => 1,
            'remarks'        => 'test remarks',
        ]);
        $permissions = Permission::all();
        $user->permissions()->attach($permissions);
        // User::factory(50)->create();
    }
}
