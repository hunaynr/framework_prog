<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PenggunaController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nip' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required'
        ]);

        $data = \App\Pengguna::create([
            'nip' => $validatedData['nip'],
            'email' => $validatedData['email'],
            'password' => $validatedData['password'],
            'role' => $validatedData['role']
        ]);

        $msg = [
            'success' => true,
            'message' => 'Step 1-Register New Account successfully'
        ];

        return response()->json($msg);
    }

    public function getPengguna($nip)
    {
        $pengguna = \App\Pengguna::where('nip', $nip)->get();

        return $pengguna->toJson();
    }

    public function getAllPengguna()
    {
        $pengguna = \App\Pengguna::all();
        return $pengguna->toJson();
    }

    public function update(Request $request, $nip)
    {
        $validatedData = $request->validate([
            'nip' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required'
        ]);

        $pengguna = \App\Pengguna::where('nip', $nip)->get();
        $pengguna[0]->nip = $validatedData['nip'];
        $pengguna[0]->email = $validatedData['email'];
        $pengguna[0]->password = $validatedData['password'];
        $pengguna[0]->role = $validatedData['role'];
        $pengguna[0]->save();

        $msg = [
            'success' => true,
            'message' => 'User updated successfully'
        ];

        return response()->json($msg);
    }

    public function delete($nip)
    {
        $checkPengguna = \App\Pengguna::where('nip', $nip)->get();
        $delPengguna = \App\Pengguna::where('nip', $nip)->delete();
        if (!empty($checkPengguna)) {
            $delPengguna;
            $msg = [
                'success' => true,
                'message' => 'User deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'User deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
