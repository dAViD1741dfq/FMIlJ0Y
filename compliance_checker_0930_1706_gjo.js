// 代码生成时间: 2025-09-30 17:06:30
// Import the lodash library
const _ = require('lodash');

/**
 * Define the compliance rules as an object with key-value pairs.
 * The keys are the field names and the values are the validation functions.
 */
const complianceRules = {
  'age': (value) => value >= 18 && !_.isNaN(value),
  'email': (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
  // Add more rules as needed
};

/**
 * Validates an input object against the defined compliance rules.
 * 
 * @param {Object} input - The input object to validate.
 * @returns {Object} An object containing the validation result and any errors.
 */
function validateCompliance(input) {
  const errors = {};
  const isValid = _.every(complianceRules, (rule, field) => {
    if (!_.has(input, field)) {
      errors[field] = `Missing field: ${field}`;
      return false;
    }
    const isValidRule = rule(input[field]);
    if (!isValidRule) {
      errors[field] = `Invalid value for field: ${field}`;
    }
    return isValidRule;
  });

  return {
    isValid,
    errors
  };
}

// Example usage
const input = {
  age: 20,
  email: 'example@test.com'
};

const result = validateCompliance(input);
console.log('Validation Result:', result);
