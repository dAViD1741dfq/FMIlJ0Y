// 代码生成时间: 2025-09-21 03:13:05
 * @author [Your Name]
 */

// Importing lodash library
const _ = require('lodash');

/**
 * A function to clean and preprocess data
 * @param {Object[]} data - The array of data objects to be cleaned
 * @returns {Object[]} - The cleaned and preprocessed data
 */
function cleanData(data) {
  // Check if data is an array
  if (!_.isArray(data)) {
    throw new Error('Input data must be an array');
  }

  // Trim strings and remove empty fields
  return _.map(data, (item) => {
    // Only process if item is an object
    if (_.isObject(item)) {
      return _.mapValues(item, (value) => {
        // Return original value if it's not a string
        if (!_.isString(value)) {
          return value;
        }
        // Trim the string and return if it's empty, otherwise return the trimmed string
        return value.trim() === '' ? null : value.trim();
      });
    }
    // If item is not an object, return it as is
    return item;
  });
}

/**
 * An example usage of the cleanData function
 */
const sampleData = [
  { name: "  John Doe ", age: 30, city: "" },
  { name: "Jane Smith", age: "", city: "New York" },
  { name: "", age: 25, city: "Los Angeles" }
];

try {
  const cleanedData = cleanData(sampleData);
  console.log("Cleaned Data: ", cleanedData);
} catch (error) {
  console.error("Error: ", error.message);
}
