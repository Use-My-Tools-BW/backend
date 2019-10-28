const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = process.nextTick.DB_ENV || 'development';

module.exports = knex(knexConfig.environment);
