import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'https//seoblog.com' : 'http://localhost:8000/api'

export const APP_NAME = publicRuntimeConfig.APP_NAME


