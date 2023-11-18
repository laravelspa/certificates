<?php

namespace Modules\Setting\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Setting\Entities\Setting;

class SettingDatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Setting::insert(
            [
                [
                    'key' => 'system_logo',
                    'value' => ''
                ],
                [
                    'key' => 'driver',
                    'value' => 'smtp'
                ],
                [
                    'key' => 'host',
                    'value' => 'localhost'
                ],
                [
                    'key' => 'port',
                    'value' => 1025
                ],
                [
                    'key' => 'encryption',
                    'value' => false
                ],
                [
                    'key' => 'username',
                    'value' => 'Test Username'
                ],
                [
                    'key' => 'password',
                    'value' => 'Password@1'
                ],
                [
                    'key' => 'sender_name',
                    'value' => 'Support'
                ],
                [
                    'key' => 'sender_email',
                    'value' => 'support@mail.com'
                ],
                [
                    'key' => 'vat_registration_number',
                    'value' => '1234567890123'
                ],
                [
                    'key' => 'email',
                    'value' => 'company@company.com'
                ],
                [
                    'key' => 'system_name',
                    'value' => 'HiraCRM'
                ],
                [
                    'key' => 'company_name',
                    'value' => 'HealthCure'
                ],
                [
                    'key' => 'company_phone',
                    'value' => '0123456789'
                ],
                [
                    'key' => 'company_address',
                    'value' => 'address test'
                ],
                [
                    'key' => 'currency_id',
                    'value' => 1
                ]
            ]
        );
        // Setting::factory(10)->create();
    }
}
