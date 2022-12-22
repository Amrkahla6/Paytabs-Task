<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;


    public function children()
    {
        return $this->hasMany(Category::class)->with('parent');
    }//end child relation

    public function parent()
    {
        return $this->hasMany(Category::class);
    }//end parent relation
}
