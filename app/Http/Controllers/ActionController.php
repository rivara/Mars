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
        $apartaments = Apartament::all();
        return response()->json($apartaments);
    }


    public function showApartament($id)
    {

        $idsRaw = implode(",", json_decode($id));
        $ids = array_map('intval', explode(',', $idsRaw));

        $features = Feature::find([$ids]);
        $collection = collect([]);
        for ($i = 0; $i < count($features); $i++) {
            $collection = $collection->concat($features[$i]->apartaments);
        }
        return response()->json($collection->unique('id')->all());
    }



    public function showFeature($id)
    {
        $apartament = Apartament::find($id);
        return response()->json($apartament->features);
    }
}
