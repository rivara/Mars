<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\Apartament;


class ActionController extends Controller
{

    public function feature()
    {
        $feature = Feature::all();
        return response()->json($feature);
    }


    public function apartament()
    {
        try {
            $apartaments = Apartament::with('features')->get();
            return response()->json($apartaments);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al obtener los apartamentos'], 500);
        }
    }
}
