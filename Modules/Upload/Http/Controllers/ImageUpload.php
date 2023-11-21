<?php

namespace Modules\Upload\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Upload\Entities\TemporaryFiles;

class ImageUpload extends Controller
{
    public function __invoke(Request $request)
    {
        if ($request->hasFile('image')) {
            $file = $request->file('image');

            $filename = date('Y_m_d') . '_' . md5($file->getClientOriginalName()) . '_' . time() . '.' . $file->getClientOriginalExtension();

            $folder = $request->folder;
            $path = 'images/temp/' . $folder;
            
            $url = $file->storeAs($path, $filename, ['disk' => 'public']);

            TemporaryFiles::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            return $this->success(['filename' => $filename, 'url' => url('storage/' . $url)]);
        }
    }
}
