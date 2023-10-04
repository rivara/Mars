<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feature;
use App\Models\Apartament;
use App\Models\ApartamentFeature;


class ActionController extends Controller
{
    
    public function showFeature()
    {
        $feature = Feature::all();
        return response()->json($feature);
    }


    public function apartament()
    {
        $apartaments = Apartament::all();
        return response()->json($apartaments);
    }


    public function showApartament($id)
    {
        //$features = Feature::find($id);
        $apartaments = Apartament::find(1);
        return response()->json($apartaments);//($features->apartaments);
    }


}
