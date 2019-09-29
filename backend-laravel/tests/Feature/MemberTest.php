<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MemberTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get()
    {
        $response = $this->get('/api/employees');
        $response->assertStatus(200);
    }

    public function test_get_id()
    {
        $response = $this->get('/api/employees/1');
        $response->assertStatus(200);
    }

    public function test_post()
    {
        $response = $this->json('POST', '/api/employees', ['thName' => 'ปิงปิง', 'enName' => 'PingPing', 'idcard' => 123456789, 
        'facebook' => 'Donate MMR', 'email' => 'test@testmail.com', 'address' => 'SUT', 'phone' => '0123456789' ]);

        $response
            ->assertStatus(201)
            ->assertExactJson([
                'created' => true,
            ]);
    }

    public function test_delete()
    {
        $response = $this->json('DELETE', '/api/employees/23')
            ->assertStatus(404); // before del 200 after del 404.
    }

    public function test_edit()
    {
        $response = $this->json('PUT', '/api/employees/1')
            ->assertStatus(200)
            ->assertJson([
                'id' => 1, 
                'thName' => 'ปิงปิง',
                'enName' => 'PingPing',
                'idcard' => 123456789, 
                'facebook' =>'Donate MMR',
                'email' =>'test@testmail.com',
                'address' => 'SUT',
                'phone' => '0123456789' 
            ]);
    }
}
