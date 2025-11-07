<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\CardController;


Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/stores', [StoreController::class, 'getStores'])->name('stores');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('mycards', [CardController::class, 'mycards']
    )->name('mycards');
});
// Route::get('/mycards', fn () => Inertia::render('mycards'))->name('mycards');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/mycards/add', [CardController::class, 'create'])->name('addcard');
});
// Route::get('/mycards/add', [CardController::class, 'create'])->name('addcard');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/mycards/new', [CardController::class, 'store'])->name('newcard');
});
// Route::post('/mycards/new', [CardController::class, 'store'])->name('newcard');


Route::get('/storelist', function () {
    return view('storelist', ['name' => 'Hossein']);
});



require __DIR__.'/settings.php';
