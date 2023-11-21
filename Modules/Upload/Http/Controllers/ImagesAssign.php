<?php

namespace Modules\Upload\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Upload\Entities\TemporaryFiles;

class ImagesAssign extends Controller
{
    public function __invoke($images, $module, $collection, $folderTemp, $multiple = false)
    {
        if (!$multiple) {
            if (isset($images['filename'])) {
                self::handleAddMedia($images['filename'], $module, $collection, $folderTemp);
            }
        } else {
            $isArrayOfArrays = empty(array_filter($images, function ($item) {
                return !is_array($item);
            }));
            
            if ($isArrayOfArrays) {
                foreach ($images as $image) {
                    if (!array_key_exists('fake', $image)) {
                        self::handleAddMedia($image['filename'], $module, $collection, $folderTemp);
                    }
                }
            }
        }
    }

    protected static function handleAddMedia($image, $module, $collection, $folderTemp)
    {
        $temp = TemporaryFiles::where('filename', $image)->where('folder', $folderTemp)->first();
      
        if ($temp) {
            $module->addMedia(storage_path('app/public/images/temp/' . $folderTemp . '/' . $image))
                ->toMediaCollection($collection);

            $temp->delete();
        }
    }
}
