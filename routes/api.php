<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StoreController;


Route::get('/stores', [StoreController::class, 'getStores']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
