<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Store;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function getStores(Request $request)
    {

        $defaultLat = 43.70712839480973;
    $defaultLng = -79.39905928155025;

    // Retrieve query parameters or fallback to defaults
    $lat = $request->query('lat', $defaultLat);
    $lng = $request->query('lng', $defaultLng);


        
        // $validated = $request->validate([
        //     'lat' => ['required', 'numeric', 'between:-90,90'],
        //     'lng' => ['required', 'numeric', 'between:-180,180'],
        // ]);

        // $lat = $validated['lat'];
        // $lng = $validated['lng'];
       
       $store= new Store();

        $stores = $store->getStores($lat,$lng);

        // return view('storelist',['stores'=> $stores]);
        return Inertia::render('storelist', [
          'stores' => $stores
        ]);
}
}
