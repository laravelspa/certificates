<?php

namespace Modules\Upload\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Modules\Upload\Entities\TemporaryFiles;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ImagesReorder extends Controller
{
  public function __invoke(Request $request)
  {
    foreach ($request->all() as $image) {
      Media::where('uuid', $image['uuid'])->update(['order_column' => $image['order_column']]); 
    }
  }
}
