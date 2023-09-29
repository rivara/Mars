<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feature;
class ActionController extends Controller
{
    
    public function show()
    {
        $feature = Feature::all();
        return response()->json($feature);
    }

}
