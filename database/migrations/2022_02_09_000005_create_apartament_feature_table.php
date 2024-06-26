<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApartamentFeatureTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apartament_feature', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('apartament_id');
            $table->unsignedBigInteger('feature_id');
            $table->foreign('apartament_id')->references('id')->on('apartaments');
            $table->foreign('feature_id')->references('id')->on('land_lords');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apartament_feature');
    }
}
