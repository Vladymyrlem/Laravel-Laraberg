<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use VanOns\Laraberg\Traits\RendersContent;

class Post extends Model
{
    use RendersContent;

    use HasFactory;
    protected $guarded = ['id'];

    protected $contentColumn = 'content';
}
