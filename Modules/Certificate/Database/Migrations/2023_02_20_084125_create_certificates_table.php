<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up()
    {
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();
            $table->string('serial_number')->nullable();
            $table->date('date');
            $table->string('facility_name');
            $table->string('facility_activity');
            $table->string('facility_address');
            $table->string('mobile');
            $table->string('commercial_register');
            $table->string('no_civil_registry');
            $table->string('internal_cameras');
            $table->string('external_cameras');
            $table->string('recording_device');
            $table->string('recording_duration');
            $table->string('storage_disk');
            $table->string('display');
            $table->string('other_specifications');
            $table->foreignId('user_id')->nullable()->constrained();

            $table->text('remarks')->nullable();
            
            $table->softDeletes();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    public function down()
    {
        Schema::dropIfExists('certificates');
    }
};
