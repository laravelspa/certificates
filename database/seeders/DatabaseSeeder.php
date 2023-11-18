<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Permission\Database\Seeders\PermissionDatabaseSeeder;
use Modules\Setting\Database\Seeders\SettingDatabaseSeeder;
use Modules\Setup\Database\Seeders\SetupDatabaseSeeder;
use Modules\User\Database\Seeders\UserDatabaseSeeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            // UserDatabaseSeeder::class,
            // SettingDatabaseSeeder::class,
            // SetupDatabaseSeeder::class,
            PermissionDatabaseSeeder::class,
        ]);
    }
}
