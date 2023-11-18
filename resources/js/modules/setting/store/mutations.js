import { Cookies } from 'quasar'

export const SET_SYSTEM_SETTINGS = (state, system_settings) => {
    state.system_settings = system_settings
}

export const SET_SYSTEM_NAME = (state) => {
    state.system_name = state.system_settings.find((setting) => setting.key === 'system_name')?.value;
    
    Cookies.set('system_name', state.system_name, {
      path: '/'
    })
}
