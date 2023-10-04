<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApartamentFeature extends Model
{
    use HasFactory;
    public $table = 'apartament_feature';

    protected $fillable = [
        'id',
        'apartament_id',
        'feature_id',
    ];

}
