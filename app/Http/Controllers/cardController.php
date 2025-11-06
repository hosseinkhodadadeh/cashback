<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\card;
class cardController extends Controller
{
    public function create()
    {
        return Inertia::render('addcard');
    }
 
    public function store(Request $request)
    {
        $validated['card_name'] = $request->input('card_name');
         $validated['card_type'] = $request->input('card_id');
        
  

     
        $record = card::create($validated);
       
         return redirect('/mycards')->with('success', 'Card added successfully!');
    }
}
