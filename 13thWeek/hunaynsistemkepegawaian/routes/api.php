<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/kepegawaians', 'KepegawaianController@index');
Route::post('/kepegawaian/store', 'KepegawaianController@store');
Route::get('/kepegawaian/edit/{id}', 'KepegawaianController@getKepegawaian');
Route::get('/kepegawaian/{id}', 'KepegawaianController@getKepegawaian');
Route::put('/kepegawaian/{id}', 'KepegawaianController@update');
Route::delete('/kepegawaian/delete/{id}', 'KepegawaianController@delete');
