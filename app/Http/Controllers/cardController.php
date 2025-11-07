<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\card;
use App\Models\cardType;
use App\Models\cardTypes;
use Illuminate\Support\Facades\Auth;

class cardController extends Controller
{
     
    public function create()
    {
        $cardTypes=cardType::all();
        return Inertia::render('addcard',['cardtypes'=>$cardTypes]);
    }

    public function mycards(){
        $cards = card::where('user_id', Auth::id())
        ->with('type')
        ->get();
      
        return Inertia::render('mycards',['cards'=>$cards]);
    }
 
    public function store(Request $request)
    {
        $validated['card_name'] = $request->input('card_name');
        $validated['card_type'] = $request->input('card_id');
        $validated['user_id'] = $user_id = Auth::id();
        
  
        $record = card::create($validated);
       
         return redirect('/mycards')->with('success', 'Card added successfully!');
    }
}
