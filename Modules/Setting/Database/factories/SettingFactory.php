<?php

namespace Modules\Setting\Database\factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Setting\Entities\Setting;
use Modules\User\Entities\User;

class SettingFactory extends Factory
{
    protected $model = Setting::class;

    public function definition()
    {
        $users = User::all()->pluck('id');
        return [
            'key' => $this->faker->sentence(3),
            'value' => $this->faker->word(),
            'user_id' => $users->random()
        ];
    }
}

