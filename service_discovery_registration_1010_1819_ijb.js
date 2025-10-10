// 代码生成时间: 2025-10-10 18:19:54
 * Dependencies:
 * - Lodash (lodash)
 *
 * @author
 */

const _ = require('lodash');

// Define a simple in-memory registry to store service information
const registry = {};

/**
 * Service Discovery and Registration Class
 * @class ServiceCatalog
 */
class ServiceCatalog {
  constructor() {
    this.services = registry;
  }

  /**
   * Registers a service with the registry
   *
   * @param {string} serviceName - The name of the service to register
   * @param {object} serviceInfo - The information about the service
   * @returns {boolean} - True if registration was successful, otherwise false
   */
  registerService(serviceName, serviceInfo) {
    if (!_.isString(serviceName) || !_.isObject(serviceInfo)) {
      console.error('Invalid input: Service name must be a string and service info must be an object.');
      return false;
    }

    if (this.services[serviceName]) {
      console.error(`Service ${serviceName} is already registered.`);
      return false;
    }

    this.services[serviceName] = serviceInfo;
    console.log(`Service ${serviceName} registered successfully.`);
    return true;
  }

  /**
   * Discovers a service by its name
   *
   * @param {string} serviceName - The name of the service to discover
   * @returns {object|null} - The service information if found, otherwise null
   */
  discoverService(serviceName) {
    if (!_.isString(serviceName)) {
      console.error('Invalid input: Service name must be a string.');
      return null;
    }

    const serviceInfo = this.services[serviceName];
    if (!serviceInfo) {
      console.error(`Service ${serviceName} not found.`);
      return null;
    }

    console.log(`Service ${serviceName} discovered.`);
    return serviceInfo;
  }
}

// Example usage
const catalog = new ServiceCatalog();

// Register a service
catalog.registerService('UserService', {
  url: 'http://user-service:8080',
  version: '1.0.0'
});

// Discover a service
const userServiceInfo = catalog.discoverService('UserService');
if (userServiceInfo) {
  console.log(userServiceInfo);
} else {
  console.log('UserService not available.');
}
