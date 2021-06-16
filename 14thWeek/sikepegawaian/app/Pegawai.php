<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    protected $table = "pegawais";
    protected $fillable = ['nip', 'nama', 'jk', 'divisi', 'jabatan', 'status', 'role'];
}
