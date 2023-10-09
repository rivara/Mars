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
       $integerIDs = array_map('intval', explode(',', json_decode($id)[0]));
       $features = Feature::find([$integerIDs]); 
       $collection = collect([]);

        for($i=0; $i < count($features); $i++){
           //$features[$i]->apartaments;
           $collection = $collection->concat($features[$i]->apartaments);
        }
        
        
   
       return response()->json($collection);
    }


}
