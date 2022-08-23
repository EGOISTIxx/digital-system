import devConfig from './config.dev.json'
import prodConfig from './config.prod.json'

export const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig