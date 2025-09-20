// 代码生成时间: 2025-09-20 15:50:38
const _ = require('lodash');
const crypto = require('crypto');

class HashCalculator {
  /**
   * Calculate hash for a given string
   *
   * @param {string} string - The input string to calculate hash for
   * @param {string} algorithm - The hash algorithm to use (e.g., 'md5', 'sha1', 'sha256')
   * @returns {string} The calculated hash value
   */
  static calculateHash(string, algorithm) {
    try {
      if (!string) {
        throw new Error('Input string is required');
      }
      if (!algorithm) {
        throw new Error('Hash algorithm is required');
      }

      const hash = crypto.createHash(algorithm)
        .update(string, 'utf8')
        .digest('hex');

      return hash;
    } catch (error) {
      console.error('Error calculating hash:', error.message);
      throw error;
    }
  }
}

/**
 * Example usage of the Hash Calculator Tool
 */
(function example() {
  try {
    const inputString = 'Hello, World!';
    const algorithm = 'sha256';
    const hashValue = HashCalculator.calculateHash(inputString, algorithm);
    console.log(`Hash value for '${inputString}' using '${algorithm}':`, hashValue);
  } catch (error) {
    console.error('Error in example usage:', error.message);
  }
})();