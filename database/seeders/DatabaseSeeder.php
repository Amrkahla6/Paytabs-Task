<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         Category::factory(20)->create();
        Category::factory(30)->create();
        Category::factory(50)->create();
        Category::factory(100)->create();
    }
}
