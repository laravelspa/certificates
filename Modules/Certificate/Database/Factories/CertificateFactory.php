<?php

namespace Modules\Certificate\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Certificate\Entities\Certificate;

class CertificateFactory extends Factory
{
    protected $model = Certificate::class;

    public function definition()
    {
        $name = $this->faker->word();
        return [
            'subject' => $name,
            'body' => $this->faker->paragraph(),
            'is_active' => $this->faker->boolean(),
            'remarks'  => $this->faker->paragraph(),
        ];
    }
}
