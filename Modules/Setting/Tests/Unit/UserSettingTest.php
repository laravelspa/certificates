<?php

namespace Modules\Setting\Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Modules\Setting\Entities\Setting;
use Modules\User\Entities\User;

class UserSettingTest extends TestCase
{
    use RefreshDatabase;
    public $settings;
    public $user;
    public function setup(): void
    {
        parent::setUp();
        $this->withoutExceptionHandling();
        $this->settings = $this->setupCompleted();
        $this->user = $this->createUsers(['is_active' => true]);
        $this->mockPermissionsWithGates($this->user);
        Sanctum::actingAs($this->user);
    }

    public function test_can_get_user_settings_by_id()
    {
        $user = $this->createUsers();
        $setting = $this->createSettings(
            [
                'user_id' => $user->first()['id']
            ]
        );
        $res = $this->get(route('settings.user', $user->first()['id']))->json();
        $this->assertEquals($res['payload']['user_id'], $user->first()['id']);
        $this->assertEquals($res['payload']['user_id'], $setting['user_id']);
        $this->assertEquals($res['payload']['key'], $setting['key']);
        $this->assertEquals($res['payload']['value'], $setting['value']);
    }

    public function test_can_store_user_settings_with_correct_data()
    {
        $this->post(
            route('settings.user_update_or_create', []),
            [
                [
                    'key' => 'new.user.key',
                    'value' => 'new.user.value'
                ]
            ]
        );
        $setting = Setting::byUser()->first();
        $this->assertEquals(auth()->id(), $setting['user_id']);
        $this->assertEquals('new.user.key', $setting['key']);
    }

    public function test_can_update_user_settings_with_correct_data()
    {
        $setting = $this->createSettings(
            [
                'key' => 'old.key',
                'value' => 'old.value',
                'user_id' => $this->user->id
            ]
        );
        $res = $this->post(
            route('settings.user_update_or_create'),
            [
                [
                    'key' => 'old.key',
                    'value' => 'new.user.value',
                ]
            ]
        )->json();

        $setting = Setting::byUser($this->user->id)->first();
        $this->assertEquals($this->user->id, $setting['user_id']);
        $this->assertEquals('old.key', $setting['key']);
        $this->assertEquals('old.key', $res['payload'][0]['key']);
        $this->assertEquals('new.user.value', $res['payload'][0]['value']);
        $this->assertEquals($this->user->id, $res['payload'][0]['user_id']);
    }
}
