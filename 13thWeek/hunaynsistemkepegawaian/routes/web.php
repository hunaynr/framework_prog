<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/kepegawaians', 'app');
Route::view('/kepegawaian/edit/{id}', 'app');
Route::view('/kepegawaian/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');
