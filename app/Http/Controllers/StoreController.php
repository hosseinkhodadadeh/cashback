<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Store;

class StoreController extends Controller
{
    public function getStores(Request $request)
    {
        // 1. Validate the required input
        $request->validate([
            'lat' => 'required|numeric',
            'lon' => 'required|numeric'
        ]);

        $latitude = $request->input('lat');
        $longitude = $request->input('lon');
       
       $store= new Store();

        $stores = $store->getStores($latitude,$longitude);

        // 3. Return the JSON response
        return response()->json([
            'status' => 'success',
            'data' => $stores
        ]);
    }
}
