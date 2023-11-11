'use strict';

/**
 * libro service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::libro.libro');
