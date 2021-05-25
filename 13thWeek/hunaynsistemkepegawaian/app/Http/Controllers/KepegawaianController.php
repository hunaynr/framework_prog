<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KepegawaianController extends Controller
{
    public function index()
    {
        $kepegawaians = \App\Kepegawaian::all();

        return $kepegawaians->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'jk' => 'required',
            'divisi' => 'required',
            'jabatan' => 'required',
            'status' => 'required'
        ]);

        $data = \App\Kepegawaian::create([
            'nama' => $validatedData['nama'],
            'jk' => $validatedData['jk'],
            'divisi' => $validatedData['divisi'],
            'jabatan' => $validatedData['jabatan'],
            'status' => $validatedData['status']
        ]);

        $msg = [
            'success' => true,
            'message' => 'Pegawai created successfully!'
        ];

        return response()->json($msg);
    }

    public function getKepegawaian($id) // for edit and show
    {
        $kepegawaian = \App\Kepegawaian::find($id);

        return $kepegawaian->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'jk' => 'required',
            'divisi' => 'required',
            'jabatan' => 'required',
            'status' => 'required',
        ]);

        $kepegawaian = \App\Kepegawaian::find($id);
        $kepegawaian->nama = $validatedData['nama'];
        $kepegawaian->jk = $validatedData['jk'];
        $kepegawaian->divisi = $validatedData['divisi'];
        $kepegawaian->jabatan = $validatedData['jabatan'];
        $kepegawaian->status = $validatedData['status'];
        $kepegawaian->save();

        $msg = [
            'success' => true,
            'message' => 'Pegawai updated successfully'
        ];

        return response()->json($msg);
    }

    public function delete($id)
    {
        $kepegawaian = \App\Kepegawaian::find($id);
        if (!empty($kepegawaian)) {
            $kepegawaian->delete();
            $msg = [
                'success' => true,
                'message' => 'Pegawai deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Pegawai deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
