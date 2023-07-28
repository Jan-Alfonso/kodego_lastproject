<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phigames extends Model
{
    use HasFactory;

    protected $fillable = [
'game_name','game_category','game_price','game_download'
    ];
}
