<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Store;

class StoreController extends Controller
{
    public function getStores(Request $request)
    {
        
        $validated = $request->validate([
            'lat' => ['required', 'numeric', 'between:-90,90'],
            'lng' => ['required', 'numeric', 'between:-180,180'],
        ]);

        $latitude = $validated['lat'];
        $longitude = $validated['lng'];
       
       $store= new Store();

        $stores = $store->getStores($latitude,$longitude);

        return view('storelist',['stores'=> $stores]);
}
}
