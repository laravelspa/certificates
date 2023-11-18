<?php

namespace Modules\Certificate\Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;

class CertificatesTest extends TestCase
{
    use RefreshDatabase;
    public $certificate;
    public $certificates;
    public function setup(): void
    {
        parent::setUp();
        $this->withoutExceptionHandling();
        $this->setupCompleted();
        $this->certificates = $this->createCertificates(10);
        $this->warehouses = $this->createWarehouses(10);
        $this->units = $this->createUnits();
        $this->user = $this->createUsers(['is_draft' => true]);
        $this->mockPermissionsWithGates($this->user);
        Sanctum::actingAs($this->user);
    }

    public function test_can_list_certificates()
    {
        $res = $this->get(route('certificates.index'))->json();
        $this->assertEquals(10, count($res['data']));
        $this->assertEquals(10, $res['meta']['total']);
    }

    public function test_can_create_certificate_with_required_inputs()
    {
        $res = $this->certificate(route('certificates.store'), [
            'name' => 'testname',
            'label' => 'testlabel',
            'barcode_type' => 1,
            'barcode' => 'testbarcode',
            'currency' => config('setting.currency'),
            'cost' => 10.00,
            'price' => 15.00,
            'tax_type' => 1,
            'tax' => 10,
            'unit_id' => 1,
            'sale_unit_id' => 1,
            'purchase_unit_id' => 1,
            'stock_alert' => 0,
            'variants' => [
                [
                    'name'      => 'default',
                    'color'     => 'red',
                    'default'   => true
                ],
                [
                    'name'      => 'test',
                    'color'     => 'white',
                    'default'   => false
                ]
            ]
        ])->json();
        $this->assertTrue($res['success']);
        $this->assertEquals($res['payload'], __('status.created', ['name' => 'testname', 'module' => __('modules.certificate')]));
    }

    public function test_can_edit_certificate()
    {
        $randomCertificateId = $this->certificates->random()->id;
        $res = $this->put(
            route('certificates.update', ['certificate' => $randomCertificateId]),
            [
                'name' => 'newtestname',
                'label' => 'testlabel',
                'barcode_type' => 1,
                'barcode' => 'testbarcode',
                'currency' => config('setting.currency'),
                'cost' => 10.00,
                'price' => 15.00,
                'tax_type' => 1,
                'tax' => 10,
                'unit_id' => 1,
                'sale_unit_id' => 1,
                'purchase_unit_id' => 1,
                'stock_alert' => 0,
                'variants' => [
                    [
                        "id" => 1,
                        "name" => "Default Variant q",
                        "default" => true,
                        "color" => "#cee5be",
                        "certificate_preview" => null,
                        "certificate_download" => null,
                        "certificate_id" => 11,
                    ]
                ],

            ]
        )->json();
        $this->assertTrue($res['success']);
        $this->assertEquals($res['payload'], __('status.updated', ['name' => 'newtestname', 'module' => __('modules.certificate')]));
    }

    public function test_can_show_certificate()
    {
        $randomCertificateId = $this->certificates->random()->id;
        $res = $this->get(route('certificates.show', ['certificate' => $randomCertificateId]))->json();
        $this->assertEquals(1, count($res));
        $this->assertEquals($randomCertificateId, $res['data']['id']);
    }

    public function test_can_show_certificate_with_variants()
    {
        $randomCertificateId = $this->certificates->random()->id;
        $this->createVariants(['certificate_id' => $randomCertificateId, 'color' => 'blue']);
        $res = $this->get(route('certificates.show', ['certificate' => $randomCertificateId]))->json();
        $this->assertEquals(1, count($res['data']['variants']));
        $this->assertEquals($randomCertificateId, $res['data']['id']);
        $this->assertEquals('blue', $res['data']['variants'][0]['color']);
        $this->assertTrue($res['data']['variants'][0]['default']);
    }

    public function test_can_delete_certificate()
    {
        $res = $this->delete(route('certificates.destroy', ['certificate' => $this->certificates->random()->id]))->json();
        $this->assertTrue($res['success']);
    }
}
