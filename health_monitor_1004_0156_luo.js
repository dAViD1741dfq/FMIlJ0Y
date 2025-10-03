// 代码生成时间: 2025-10-04 01:56:22
// Importing Lodash library
const _ = require('lodash');

// Define HealthMonitor class
class HealthMonitor {
  // Constructor
  constructor() {
    this.data = []; // Store health data
  }

  /**
   * Simulate receiving health data from a device
   * @param {Object} data - Health data received from the device
   * @returns {void}
   */
  receiveData(data) {
    if (!_.isObject(data)) {
      throw new Error('Invalid data format. Data should be an object.');
    }
    this.data.push(data); // Add data to the collection
  }

  /**
   * Process the collected health data
   * @returns {Object} - Processed health data
   */
  processData() {
    // Check if there is any data to process
    if (this.data.length === 0) {
      throw new Error('No data available to process.');
    }

    // Process data using lodash functions
    const processedData = _.reduce(this.data, (result, currentData) => {
      // Example processing: calculate average heart rate
      result.heartRate += currentData.heartRate || 0;
      return result;
    }, { heartRate: 0 });

    // Calculate average heart rate
    processedData.averageHeartRate = processedData.heartRate / this.data.length;

    return processedData;
  }
}

// Example usage
try {
  const monitor = new HealthMonitor();
  monitor.receiveData({ heartRate: 72 });
  monitor.receiveData({ heartRate: 75 });
  monitor.receiveData({ heartRate: 70 });

  const processedData = monitor.processData();
  console.log('Processed Data:', processedData);
} catch (error) {
  console.error('Error:', error.message);
}