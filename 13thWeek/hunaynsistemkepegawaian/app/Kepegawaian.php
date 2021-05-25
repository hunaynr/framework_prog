<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kepegawaian extends Model
{
    protected $table = "kepegawaians";
    protected $fillable = ['nama', 'jk', 'divisi', 'jabatan', 'status'];
}
