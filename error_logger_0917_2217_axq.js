// 代码生成时间: 2025-09-17 22:17:42
const _ = require('lodash');

/**
 * ErrorLogger class responsible for collecting and handling errors.
 */
class ErrorLogger {
  /**
   * Initiate with a storage for errors and a log function.
   * @param {Function} logFunction - The function to call to log errors.
   */
  constructor(logFunction) {
    this.errors = [];
    this.logFunction = logFunction;
  }

  /**
   * Add an error to the error storage.
   * @param {Error} error - The error object to be logged.
   */
  logError(error) {
    if (!_.isError(error)) {
      throw new Error('Provided argument is not an instance of Error.');
    }
    this.errors.push(error);
    this.logFunction(error);
  }

  /**
   * Retrieve all logged errors.
   * @returns {Array} - Array of error objects.
   */
  getErrors() {
    return this.errors;
  }

  /**
   * Clear all logged errors.
   */
  clearErrors() {
    this.errors = [];
  }
}

/**
 * Example log function using console.error.
 * In a real-world scenario, you might use a logging library or a service.
 */
function exampleLogFunction(error) {
  console.error('An error occurred:', error.message);
}

// Usage example
const logger = new ErrorLogger(exampleLogFunction);

// Simulate an error
try {
  // Code that might throw an error
  throw new Error('Something went wrong!');
} catch (error) {
  logger.logError(error);
}

// Retrieve and display errors
const errors = logger.getErrors();
console.log('Logged Errors:', errors);
