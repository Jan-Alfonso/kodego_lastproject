<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Phigames;
use App\Http\Resources\PhigamesResources;

class PhigamesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $phigames = Phigames::all();
        $response = ['code' => 200,
        'message' => 'Succesful Retrieval of Games',
        'phigames' => PhigamesResources::collection($phigames)
    ];
    return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $input =  $request->all();
        $phigame = Phigames::create($input);
        $response = ['code' => 200,
        'message' => 'Game Created Successfully',
        'phigame' => new PhigamesResources($phigame)
    ];
    return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $phigame = Phigames::findOrFail($id);
        $response = ['code' => 200,
        'message' => 'Game Created Successfully',
        'phigame' => new PhigamesResources($phigame)
    ];
    return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $input =  $request->all();
        $phigame = Phigames::findOrFail($id);
        $phigame->update($input);
        $response = ['code' => 200,
        'message' => 'Game Updated Successfully',
        'phigame' => new PhigamesResources($phigame)
    ];
    return $response;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $phigame = Phigames::findOrFail($id);
        
        $phigame->delete();
        $response = ['code' => 200,
        'message' => 'Game Deleted Successfully',
        'phigame' => new PhigamesResources($phigame)
    ];
    return $response;

    }
}
