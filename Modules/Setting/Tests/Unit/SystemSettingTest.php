<?php

namespace Modules\Setting\Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Modules\Setting\Entities\Setting;

class SystemSettingTest extends TestCase
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

    public function test_can_list_system_settings_only()
    {
        $res = $this->get(route('settings.system'))->json();
        $this->assertEquals(null, $res['data'][0]['user_id']);
        $this->assertEquals($this->settings['key'], $res['data'][0]['key']);
        $this->assertEquals($this->settings['id'], $res['data'][0]['id']);
    }

    public function test_can_not_store_system_settings_without_correct_data()
    {
        $this->post(route('settings.system_update_or_create'), [[]])
            ->assertJsonMissingValidationErrors([
                '0.key' => 'The key field is required.',
            ])->assertStatus(422);
    }

    public function test_can_not_store_system_settings_with_correct_data_with_user_id()
    {
        $this->post(
            route('settings.system_update_or_create', []),
            [
                [
                    'key' => 'new.key',
                    'value' => 'new.value',
                    'user_id' => 1
                ]
            ]
        );
        $setting = Setting::systemOnly()->where('key', 'new.key')->first();
        $this->assertEquals(null, $setting['user_id']);
    }

    public function test_can_store_system_settings_with_correct_data()
    {
        $this->post(
            route('settings.system_update_or_create'),
            [
                [
                    'key' => 'new.key',
                    'value' => 'new.value'
                ]
            ]
        );
        $setting = Setting::systemOnly()->where('key', 'new.key')->first();
        $this->assertEquals(null, $setting['user_id']);
        $this->assertEquals('new.key', $setting['key']);
    }

    public function test_can_update_system_settings()
    {
        $setting = $this->createSettings(
            [
                'key' => 'old.key',
                'value' => 'old.value',
                'user_id' => null
            ]
        );
        $res = $this->post(
            route('settings.system_update_or_create'),
            [
                [
                    'key' => 'old.key',
                    'value' => 'new.value',
                ]
            ]
        )->json();

        $result = collect($res['payload'])->where('id', $setting->id)->first();
        $this->assertEquals(null, $result['user_id']);
        $this->assertEquals('old.key', $result['key']);
        $this->assertEquals('new.value', $result['value']);
    }
}
