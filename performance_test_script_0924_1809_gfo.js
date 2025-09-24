// 代码生成时间: 2025-09-24 18:09:49
const _ = require('lodash');

/**
 * Perform performance testing on a given function.
 * @param {Function} func - The function to be tested.
 * @param {number} [times=100] - The number of times to execute the function.
 * @returns {Object} - An object containing the execution time and average time per run.
 */
function performanceTest(func, times = 100) {
  if (!_.isFunction(func)) {
    throw new Error('The first argument must be a function.');
  }

  const startTime = Date.now();
  for (let i = 0; i < times; i++) {
    try {
      func();
    } catch (error) {
      console.error('Error during performance testing:', error);
      return {
        error: 'Function execution failed.',
        executionTime: Date.now() - startTime,
        averageTimePerRun: (Date.now() - startTime) / (i + 1)
      };
    }
  }
  const endTime = Date.now();
  const executionTime = endTime - startTime;
  const averageTimePerRun = executionTime / times;
  return {
    executionTime,
    averageTimePerRun
  };
}

/**
 * Example usage of the performance test function.
 * This function simply sleeps for 100 milliseconds to simulate work.
 */
function exampleFunction() {
  const start = Date.now();
  while (Date.now() - start < 100); // Sleep for 100 milliseconds.
}

// Run the performance test on exampleFunction.
const testResults = performanceTest(exampleFunction, 1000);
console.log('Performance Test Results:', testResults);
