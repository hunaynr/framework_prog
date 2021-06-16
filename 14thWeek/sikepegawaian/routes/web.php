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

Route::get('/', function () {
    return view('welcome');
});

Route::view('/home', 'app');
Route::view('/register', 'app');
Route::view('/registersecond', 'app');
Route::view('/login', 'app');
Route::view('/dashboarduser/{nip}', 'app');
Route::view('/dashboardadmin', 'app');
Route::view('/managepegawai', 'app');
Route::view('/pegawai/edit/{nip}', 'app');
Route::view('/pegawaicreate', 'app');
Route::view('/managepengguna', 'app');
Route::view('/penggunacreate', 'app');
Route::view('/biodata/{nip}', 'app');
Route::view('/task/{nip}', 'app');
