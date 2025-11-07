<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class card extends Model
{
        use HasFactory;
    protected $fillable = [
        'card_name',
        'card_type',
        'user_id',
    ];

    public function type()
    {
        return $this->belongsTo(CardType::class, 'card_type');
    }


}
