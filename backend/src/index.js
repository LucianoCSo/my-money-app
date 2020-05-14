const Server = require('./config/server');
require('./config/database');
require('./config/routes')(Server);