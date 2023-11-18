<?php

use Modules\Auth\Http\Controllers\LoginAction;
use Modules\Auth\Http\Controllers\LogoutAction;
use Modules\Auth\Http\Controllers\ProfileShow;
use Modules\Auth\Http\Controllers\ProfileUpdate;
use Modules\Auth\Http\Controllers\AuthPermissions;

Route::prefix('v1/auth')
    ->group(function () {
        Route::middleware('guest')->group(function () {
            Route::post('/login', LoginAction::class)->name('auth.login');
        });
        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/logout', LogoutAction::class)->name('auth.logout');
            Route::get('/profile', ProfileShow::class)->name('profile.get');
            Route::post('/profile', ProfileUpdate::class)->name('profile.update');
            Route::get('/permissions', AuthPermissions::class)->name('auth.permissions');
        });
    });
