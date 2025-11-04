<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;


class Store extends Model
{
    public function getStores($lat,$lng){
        $radius = '100'; 
        $type = 'store';
        $placesResponse = Http::withoutVerifying()->get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", [
            'location' => "$lat,$lng",
            'radius' => $radius,
            'type' => $type,
            'key' => env('GOOGLE_API_KEY')
        ]);
        $places = $placesResponse->json();

        return response()->json([
            'coordinates' => ['lat' => $lat, 'lng' => $lng],
            'stores' => $places['results'] ?? []
        ]);

      
    }
}
