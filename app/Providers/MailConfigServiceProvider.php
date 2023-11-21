<?php

namespace App\Providers;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;
use Modules\Setting\Entities\Setting;

class MailConfigServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        if (!app()->runningInConsole()) {
            $configuration = Setting::systemOnly()->get();
            if (!is_null($configuration->all())) {
                $config = array(
                    'driver'     =>     $this->getSettingValue($configuration, 'driver'),
                    'host'       =>     $this->getSettingValue($configuration, 'host'),
                    'port'       =>     +$this->getSettingValue($configuration, 'port'),
                    'username'   =>     $this->getSettingValue($configuration, 'username'),
                    'password'   =>     $this->getSettingValue($configuration, 'password'),
                    'encryption' =>     $this->getSettingValue($configuration, 'encryption') === '0' ? false : true,
                    'from'       =>     array('address' => $this->getSettingValue($configuration, 'sender_email'), 'name' => $this->getSettingValue($configuration, 'sender_name')),
                );
                Config::set('mail', $config);
            }
        }
    }

    public function getSettingValue($configuration, $key)
    {
        return $configuration->where('key', $key)->first()->value ?? null;
    }
}
