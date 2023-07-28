<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PhigamesResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'game_name' => $this->game_name,
            'game_category' => $this->game_category,
            'game_price' => $this->game_price,
            'game_download'=>$this->game_download,
        ];
    }
}
