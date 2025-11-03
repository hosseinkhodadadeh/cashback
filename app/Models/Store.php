<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    public function getStores($lat,$lon){


        return [
            0=> 'Metro',
            1=> "Food Basic"
        ];
    }
}
