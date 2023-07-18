<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dota extends Model
{
    use HasFactory;

    protected $fillable = [
        'dota_item', 'dota_item_details', 'dota_item_rarity'
    ];
}
