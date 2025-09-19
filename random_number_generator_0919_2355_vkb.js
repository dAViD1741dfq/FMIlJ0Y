// 代码生成时间: 2025-09-19 23:55:52
const _ = require('lodash');

/**
 * RandomNumberGenerator class provides a method to generate random numbers within a specified range.
 *
 * @class RandomNumberGenerator
 * @param {number} min - The minimum value in the range.
 * @param {number} max - The maximum value in the range.
 */
class RandomNumberGenerator {
  constructor(min, max) {
    // Validate input range
    if (_.isUndefined(min) || _.isUndefined(max) || !Number.isInteger(min) || !Number.isInteger(max) || min > max) {
      throw new Error('Invalid range, min and max must be integers and min should be less than max.');
    }

    this.min = Math.ceil(min);
    this.max = Math.floor(max);
  }

  /**
   * Generates a random number within the specified range.
   *
   * @returns {number} A random integer between the min and max range (inclusive).
   */
  getRandomNumber() {
    return _.random(this.min, this.max + 1); // lodash's random function is inclusive of the max value
  }
}

// Example usage:
// const rng = new RandomNumberGenerator(1, 10);
// console.log(rng.getRandomNumber()); // Outputs a random number between 1 and 10

module.exports = RandomNumberGenerator;
