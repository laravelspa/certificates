<?php

namespace Modules\Setup\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Setting\Entities\Setting;
class SetupDatabaseSeeder extends Seeder
{
    public function run()
    {
        Setting::create([
            'key' => 'system_setup_completed',
            'value' => '1'
        ]);
    }
}
