<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActionController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/features', [ActionController::class, 'feature']);
Route::get('/apartaments', [ActionController::class, 'apartament']);
//Route::get('/apartamentsfeature', [ActionController::class, 'showApartament']);
//Route::get('/apartamentsfeature/{id}', [ActionController::class, 'showApartament']);
//Route::get('/featureapartament/{id}', [ActionController::class, 'showFeature']);
