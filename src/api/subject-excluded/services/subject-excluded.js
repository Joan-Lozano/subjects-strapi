'use strict';

/**
 * subject-excluded service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subject-excluded.subject-excluded');
