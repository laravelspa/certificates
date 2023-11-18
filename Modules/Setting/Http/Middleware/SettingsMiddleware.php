<?php

namespace Modules\Setting\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SettingsMiddleware
{
    /**
     * Load some settings for the current user if applicable.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!setupCompleted()) {
            return $next($request);
        }

        // Set global configs based on the user settings
        if ($user_timezone = usersettings('timezone')) {
            config(['app.timezone' => $user_timezone]);
        }

        // if ($userLocale = usersettings('locale')) {
        //     app()->setLocale($userLocale);
        // }

        return $next($request);
    }
}
