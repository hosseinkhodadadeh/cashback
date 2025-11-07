<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class cardType extends Model
{
    //
    use HasFactory;
    protected $fillable = ['name','bg_color','bg_image'];
    public function cards()
    {
        return $this->hasMany(Card::class, 'card_type');
    }
}
