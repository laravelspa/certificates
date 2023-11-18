<?php

namespace Modules\Upload\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Modules\Upload\Entities\TemporaryFiles;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ImageDestroy extends Controller
{
  public function __invoke(Request $request)
  {
    if ($request->id) {
      $media = Media::where('uuid', $request->id)->first();
      $media->delete();

      $checkFile = Storage::exists($media->collection_name . '/' . $media->id);

      if ($checkFile) {
        Storage::deleteDirectory($media->collection_name . '/' . $media->id);
      }
    } else {
      $checkFile = Storage::exists('images/temp/' . $request->collection . '/' . $request->filename);

      if ($checkFile) {
        Storage::delete('images/temp/' . $request->collection . '/' . $request->filename);
      }
    }

    TemporaryFiles::where('folder', $request->collection)->where('filename', $request->filename)->delete();
  }
}
