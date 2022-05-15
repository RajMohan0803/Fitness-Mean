// check env.
var env = process.env.NODE_ENV || 'production';

const PORT = process.env.PORT || '3000';

// fetch env. config
var config = require('./config.json');
var envConfig = config[env];

envConfig.PORT = PORT;

// add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);