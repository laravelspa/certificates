import { Cookies } from 'quasar'

export const getSystemSettings = (state) => state.system_settings
export const getSystemName = (state) => state.system_name ?? Cookies.get('system_name') ?? import.meta.env.VITE_APP_NAME
