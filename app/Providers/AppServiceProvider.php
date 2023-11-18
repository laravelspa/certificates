<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;
use Modules\Certificate\Entities\Certificate;
use Modules\Setting\Entities\Setting;
use Modules\User\Entities\User;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::shouldBeStrict(!$this->app->isProduction());
        Relation::morphMap([
            'User'              => User::class,
            'Setting'           => Setting::class,
            'Certificate'       => Certificate::class,
        ]);
    }
}
