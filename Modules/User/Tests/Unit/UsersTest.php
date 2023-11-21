<?php

namespace Modules\User\Tests\Unit;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;

class UsersTest extends TestCase
{
    use RefreshDatabase;
    public $user;
    public $users;
    public function setup(): void
    {
        parent::setUp();
        $this->withoutExceptionHandling();
        $this->setupCompleted();
        $this->users = $this->createUsers(10);
        $this->user = $this->createUsers(['is_active' => true]);
        $this->mockPermissionsWithGates($this->user);
        Sanctum::actingAs($this->user);
    }

    public function test_can_list_users()
    {
        $res = $this->get(route('users.index'))->json();
        $this->assertEquals(10, count($res['data']));
        $this->assertEquals(10, $res['meta']['total']);
    }

    public function test_can_create_user_with_required_inputs()
    {
        $res = $this->post(route('users.store'), [
            'username' => 'testusername',
            'password' => 'Password1@',
            'password_confirmation' => 'Password1@'
        ])->json();
        $this->assertTrue($res['success']);
        $this->assertEquals($res['payload'], __('status.created', ['name' => 'testusername', 'module' => __('modules.user')]));
    }

    public function test_can_edit_user()
    {
        $res = $this->put(route('users.update', ['user' => $this->user]),
        [
            'username' => 'newusername',
            'password' => 'Password1@',
            'password_confirmation' => 'Password1@'
        ])->json();
        $this->assertTrue($res['success']);
        $this->assertEquals($res['payload'], __('status.updated', ['name' => 'newusername', 'module' => __('modules.user')]));
    }

    public function test_can_show_user()
    {
        $randomUserId = $this->users->random()->id;
        $res = $this->get(route('users.show', ['user' => $randomUserId]))->json();
        $this->assertEquals(1, count($res));
        $this->assertEquals($randomUserId, $res['data']['id']);
    }

    public function test_can_show_user_with_contacts()
    {
        $randomUserId = $this->users->random()->id;
        $this->createContact(['contactable_id' => $randomUserId]);
        $res = $this->get(route('users.show', ['user' => $randomUserId]))->json();

        $this->assertEquals(1, count($res));
        $this->assertEquals($randomUserId, $res['data']['id']);
        $this->assertEquals($randomUserId, $res['data']['contacts'][0]['contactable_id']);
    }

    public function test_can_show_user_with_locations()
    {
        $randomUserId = $this->users->random()->id;
        $this->createLocation(['locationable_id' => $randomUserId]);
        $res = $this->get(route('users.show', ['user' => $randomUserId]))->json();

        $this->assertEquals(1, count($res));
        $this->assertEquals($randomUserId, $res['data']['id']);
        $this->assertEquals($randomUserId, $res['data']['locations'][0]['locationable_id']);
    }

    public function test_can_delete_user()
    {
        $res = $this->delete(route('users.destroy', ['user' => $this->users->random()->id]))->json();
        $this->assertTrue($res['success']);
    }
}
