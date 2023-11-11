'use strict';

/**
 * singletest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::singletest.singletest');
