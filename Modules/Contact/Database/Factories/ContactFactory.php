<?php

namespace Modules\Contact\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\User\Entities\User;

class ContactFactory extends Factory
{
    protected $model = \Modules\Contact\Entities\Contact::class;

    public function definition()
    {
        $users = User::all()->pluck('id');
        return [
            'email' => $this->faker->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'mobile' => $this->faker->e164PhoneNumber(),
            'contactable_type' => 'User',
            'contactable_id' => $users->random()
        ];
    }
}

