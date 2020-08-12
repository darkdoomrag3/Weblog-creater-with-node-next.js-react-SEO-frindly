import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'https//seoblog.com' : 'http://localhost:8000/api'

export const APP_NAME = publicRuntimeConfig.APP_NAME

export const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_DEVELOPMENT : publicRuntimeConfig.DOMAIN_PRODUCTION


    // DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    //     DOMAIN_PRODUCTION: 'https://emad.com'


/////// 11 68