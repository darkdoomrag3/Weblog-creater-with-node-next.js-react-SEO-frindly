import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'https//seoblog.com' : 'http://localhost:8000/api'

export const APP_NAME = publicRuntimeConfig.APP_NAME

export const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_DEVELOPMENT : publicRuntimeConfig.DOMAIN_PRODUCTION
export const FB_APP_ID = ''
export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME

    // DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    //     DOMAIN_PRODUCTION: 'https://emad.com'


/////// 18 104