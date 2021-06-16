<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    public function getAllPegawai()
    {
        $pegawai = \App\Pegawai::all();
        return $pegawai->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nip' => 'required',
            'nama' => 'required',
            'jk' => 'required',
            'divisi' => 'required',
            'jabatan' => 'required',
            'status' => 'required',
            'role' => 'required'
        ]);

        $data = \App\Pegawai::create([
            'nip' => $validatedData['nip'],
            'nama' => $validatedData['nama'],
            'jk' => $validatedData['jk'],
            'divisi' => $validatedData['divisi'],
            'jabatan' => $validatedData['jabatan'],
            'status' => $validatedData['status'],
            'role' => $validatedData['role']
        ]);

        $msg = [
            'success' => true,
            'message' => 'Step 2-Final Register New Account successfully'
        ];

        return response()->json($msg);
    }

    public function getPegawai($nip)
    {
        $pegawai = \App\Pegawai::where('nip', $nip)->get();
        return $pegawai->toJson();
    }

    public function delete($nip)
    {
        $checkPegawai = \App\Pegawai::where('nip', $nip)->get();
        $delPegawai = \App\Pegawai::where('nip', $nip)->delete();
        if (!empty($checkPegawai)) {
            $delPegawai;
            $msg = [
                'success' => true,
                'message' => 'Employee deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Employee deleted failed!'
            ];
            return response()->json($msg);
        }
    }

    public function update(Request $request, $nip)
    {
        $validatedData = $request->validate([
            'nip' => 'required',
            'nama' => 'required',
            'jk' => 'required',
            'divisi' => 'required',
            'jabatan' => 'required',
            'status' => 'required',
            'role' => 'required'
        ]);

        $pegawai = \App\Pegawai::where('nip', $nip)->get();
        $pegawai[0]->nip = $validatedData['nip'];
        $pegawai[0]->nama = $validatedData['nama'];
        $pegawai[0]->jk = $validatedData['jk'];
        $pegawai[0]->divisi = $validatedData['divisi'];
        $pegawai[0]->jabatan = $validatedData['jabatan'];
        $pegawai[0]->status = $validatedData['status'];
        $pegawai[0]->role = $validatedData['role'];
        $pegawai[0]->save();

        $msg = [
            'success' => true,
            'message' => 'Pegawai updated successfully'
        ];

        return response()->json($msg);
    }
}
