<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        $data = $request->validate([
            'name'=> 'required|string',
            'email'=> 'required|email|string|unique:users,email',
            'password'=>[
                'required',
                'confirmed'
            ]
        ]);

        $user = User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=> bcrypt($data['password']) 
        ]);

        $token = $user->createToken(name:'main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }
    
    public function login(Request $request){
        $credential = $request->validate([
            'email'=> 'required',
            'password'=>'required',
            'remember'=>'boolean'
        ]);

        $remember = $credential['remember']??false;
        unset($credential['remember']);
        if(!Auth::attempt($credential,$remember)){
            return response([
                'error' => 'provided credential are not correct',
            ],422);    
        }   
        $user = Auth::user();
        $token = $user->createToken(name:'main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }
}
