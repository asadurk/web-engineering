const env = process.env.NODE_ENV || 'development'

let envConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config;
    
    break
  case 'test':
  case 'testing':
    envConfig = require('./testing').config;
    break
  default:
    envConfig = require('./dev').config;
}
export default envConfig;
