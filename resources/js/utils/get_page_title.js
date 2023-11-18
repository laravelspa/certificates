import { getSettings } from '../../js/utils/settings';
import i18n from '../i18n';

const { t, te } = i18n.global

const title = import.meta.env.VITE_APP_NAME;
export const getPageTitle = (key) => {
  const hasKey = te(`links.${key}`);

  if (hasKey) {
    const pageName = t(`links.${key}`, 2);
    return `${pageName} - ${title}`;
  }
  return `${title}`;
}


export const slugify = str => {
  if (typeof str === 'string') {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}