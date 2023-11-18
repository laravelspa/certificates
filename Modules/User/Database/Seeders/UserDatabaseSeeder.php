<?php

namespace Modules\User\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\User\Entities\User;

class UserDatabaseSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'username'      => 'admin',
            'firstname'     => 'Admin',
            'lastname'      => 'Admin',
            'email'         => 'admin@admin.com',
            'is_active'        => true,
            'send_notify'        => true,
            'password'      => 'Passwordsecret1@',
            'gender'        => 1,
            'remarks'        => 'test remarks',
        ]);

        User::factory(50)->create();
    }
}
