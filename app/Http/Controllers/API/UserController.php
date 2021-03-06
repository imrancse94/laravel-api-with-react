<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
class UserController extends Controller
{
    public $successStatus = 200;

    public function login(){
        $success['status'] = 404;
        if(Auth::check()){
            return response()->json(['message' => 'Already logged in'], $this->successStatus);
        } else {
            if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
                $user = Auth::user();
                if(!empty($user)){
                    $success['user'] = $user;
                    $success['status'] = $this->successStatus;
                    $success['token'] = $user->createToken('MyApp')->accessToken;
                    return response()->json(['success' => $success], $this->successStatus);
                }

            } else {
                return response()->json(['error' => 'Unauthorised'], 401);
            }
        }
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')-> accessToken;
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], $this->successStatus);
    }

    public function details(Request $request)
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }

    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ], $this->successStatus);
    }
}
