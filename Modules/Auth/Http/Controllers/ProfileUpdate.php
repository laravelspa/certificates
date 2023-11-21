<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Notifications\CreateUserNotification;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Modules\Auth\Http\Requests\UpdateProfileRequest;
use Modules\Auth\Transformers\AuthResource;
use Modules\Contact\Entities\Contact;
use Modules\Location\Entities\Location;
use Modules\Setting\Entities\Setting;
use Modules\Upload\Http\Controllers\ImagesAssign;
use Modules\User\Entities\User;

class ProfileUpdate extends Controller
{
    public function __invoke(UpdateProfileRequest $request)
    {
        // try {
            $profile = User::where('id', auth()->id())->first();
            $request = $request->validated();

            $profile = DB::transaction(function () use ($profile, $request) {
                $profile->update(Arr::except($request, ['contacts', 'locations', 'avatar']));

                if (isset($request['contacts'])) {
                    $contacts = [];
                    $create_contacts = [];
                    $ids = [];

                    foreach ($request['contacts'] as $contact) {
                        if (isset($contact['id'])) {
                            $ids[] = $contact['id'];
                            $contacts[] = $contact;
                        } else {
                            if (!is_null($contact['mobile']) || !is_null($contact['phone']) || !is_null($contact['email'])) {
                                $create_contacts[] = $contact;
                            }
                        }
                    }

                    $profile->contacts()->whereNotIn('id', $ids)->delete();

                    if ($create_contacts) {
                        $profile->contacts()->createMany($create_contacts);
                    }

                    if ($contacts) {
                        Contact::upsert($contacts, ['id']);
                    }
                }

                if (isset($request['locations'])) {
                    $locations = [];
                    $create_locations = [];
                    $ids = [];

                    foreach ($request['locations'] as $location) {
                        if (isset($location['id'])) {
                            $ids[] = $location['id'];
                            $locations[] = $location;
                        } else {
                            if (!is_null($location['country']) || !is_null($location['city']) || !is_null($location['state']) || !is_null($location['zip']) || !is_null($location['first_address']) || !is_null($location['second_address'])) {
                                $create_locations[] = $location;
                            }
                        }
                    }

                    $profile->locations()->whereNotIn('id', $ids)->delete();

                    if ($create_locations) {
                        $profile->locations()->createMany($create_locations);
                    }
                    if ($locations) {
                        Location::upsert($locations, ['id']);
                    }
                }
                if (isset($request['avatar']) && !is_null($request['avatar']) && !array_key_exists('fake', $request['avatar'])) {
                    (new ImagesAssign)($request['avatar'], $profile, 'users', 'avatar');
                }

                return $profile;
            });

            return $this->success(['loginUser' => AuthResource::make($profile->load(['media'])), 'message' => __('status.updated', ['name' => $profile['username'], 'module' => __('modules.user')])]);
        // } catch (\Illuminate\Database\QueryException $e) {
        //     $this->error(__('status.update_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        // } catch (\Exception $e) {
        //     $this->error(trans('status.update_error'), Response::HTTP_INTERNAL_SERVER_ERROR);
        // }
    }
}
