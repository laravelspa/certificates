import { Cookies } from "quasar"

export const getLocale = (state) => state.locale ?? Cookies.get('locale') ?? 'ar'
export const getLocales = (state) => state.locales ?? Cookies.get('locales') ?? ['en', 'ar']