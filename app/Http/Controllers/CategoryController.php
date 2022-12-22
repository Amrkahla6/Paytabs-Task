<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function mainCategory(){
        $main = Category::select('id','name')
            ->whereNull('category_id')
            ->orderBy('id','desc')
            ->get();
        return response(['categories' => $main]);
    }

    public function subCategory(CategoryRequest $request){
        $sub = Category::select('id','name','category_id')
            ->where('category_id',$request->category_id)
            ->orderBy('id','desc')
            ->get();

        if(count($sub) == 0){
            return response(['error' => 'This category does not have subcategories'], 404);
        }
        return response(['subCategory' => $sub]);
    }
}
