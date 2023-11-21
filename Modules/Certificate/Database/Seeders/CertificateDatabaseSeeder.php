<?php

namespace Modules\Certificate\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Certificate\Entities\Certificate;

class CertificateDatabaseSeeder extends Seeder
{
    public function run()
    {
        Certificate::factory(5)->create();        
    }
}
