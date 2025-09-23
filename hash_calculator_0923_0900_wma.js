// 代码生成时间: 2025-09-23 09:00:48
const _ = require('lodash');

/**
 * Hash Calculator Tool
 * This tool calculates the hash of a given string using a specified algorithm.
 * @param {string} input - The string to calculate the hash for.
 * @param {string} algorithm - The hash algorithm to use (e.g., 'md5', 'sha256').
 * @returns {Promise<string>} - A promise that resolves to the hash value.
 */
function calculateHash(input, algorithm) {
  // Check if input is a string
  if (!_.isString(input)) {
    throw new Error('Input must be a string');
  }

  // Check if algorithm is valid
  const validAlgorithms = ['md5', 'sha256', 'sha512'];
  if (!validAlgorithms.includes(algorithm)) {
    throw new Error(`Invalid algorithm: ${algorithm}. Supported algorithms: ${validAlgorithms.join(', ')}`);
  }

  // Use the crypto module to calculate the hash
  return new Promise((resolve, reject) => {
    const crypto = require('crypto');
    const hash = crypto.createHash(algorithm);
    hash.update(input);
    resolve(hash.digest('hex'));
  });
}

/**
 * Example usage of the hash calculator tool.
 */
calculateHash('Hello, World!', 'sha256')
  .then(hash => console.log(`Hash value: ${hash}`))
  .catch(error => console.error(`Error calculating hash: ${error.message}`));