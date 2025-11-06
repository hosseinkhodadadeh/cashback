<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class card extends Model
{
    //
    protected $fillable = [
        'card_name',
        'card_type',
        // add other fields like 'user_id', 'number', etc. if needed
    ];
}
