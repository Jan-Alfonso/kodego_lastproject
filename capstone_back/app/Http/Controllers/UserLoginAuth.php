<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserLoginAuth extends Controller
{
    //
    public function register(request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            if ($errors->has('email')) {
                return response(['regError' => 'Email is already taken.'], 422);
            }
            return response(['regError' => $errors->all()], 422);
        }

        $password_hash = Hash::make($request->password);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $password_hash

        ]);

        $token = $user->createToken('LaravelTokenPassword')->accessToken;

        $response = ['token' => $token, 'message' => 'User Successfully Created'];

        return $response;
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if($validator->fails()){
            return response(['error'=> $validator->errors()->all()],422);
        } 
    


$user = User::where('email',$request->email)->first();
if($user){
    $check_password = Hash::check($request->password,$user->password);

if($check_password){
    $token = $user->createToken('LaravelTokenPassword')->accessToken;
        $response = ['token' => $token, 'message' => 'Successfully Logged In', 'user' => $user];
        
        return $response;

}else{
    return response(['error'=>'Invalid Password.'],422);
}
}else{
    return response(['error'=>'Email does not exist!'],422);
}

}

public function logout(request $request){
    $token = $request->user()->token();
    $token->revoke();
    $response = ['message'=>'Logged Out'];
    return $response;
}

}

