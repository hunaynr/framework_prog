<?php

use Illuminate\Http\Request;
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

Route::post('/pengguna/store', 'PenggunaController@store');
Route::post('/pegawai/store', 'PegawaiController@store');
Route::get('/pengguna/{nip}', 'PenggunaController@getPengguna');
Route::get('/pegawai', 'PegawaiController@getAllPegawai');
Route::delete('/pegawai/delete/{nip}', 'PegawaiController@delete');
Route::put('/pegawai/{nip}', 'PegawaiController@update');
Route::get('/pegawai/edit/{nip}', 'PegawaiController@getPegawai');
Route::get('/pengguna', 'PenggunaController@getAllPengguna');
Route::put('/pengguna/{nip}', 'PenggunaController@update');
Route::get('/pengguna/edit/{nip}', 'PenggunaController@getPengguna');
Route::delete('/pengguna/delete/{nip}', 'PenggunaController@delete');
Route::get('/pegawai/read/{nip}', 'PegawaiController@getPegawai');
