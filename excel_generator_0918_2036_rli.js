// 代码生成时间: 2025-09-18 20:36:39
const XLSX = require('xlsx');
const _ = require('lodash');

class ExcelGenerator {
  "use strict";

  constructor() {
    // 初始化Excel工作簿
    this.wb = XLSX.utils.book_new();
  }

  // 添加工作表
  addWorksheet(data, sheetName) {
    try {
      // 检查数据和工作表名称是否有效
      if (!_.isArray(data) || !_.isString(sheetName)) {
        throw new Error('Invalid data or sheet name');
      }

      // 使用lodash处理数据，例如排序、筛选等
      // 例如: data = _.sortBy(data, 'name');

      // 将数据处理为工作表
      const ws = XLSX.utils.json_to_sheet(data);

      // 添加工作表到工作簿
      XLSX.utils.book_append_sheet(this.wb, ws, sheetName);
    } catch (error) {
      console.error('Error adding worksheet:', error.message);
    }
  }

  // 导出Excel文件
  exportExcel(filename) {
    try {
      if (!_.isString(filename) || !filename.endsWith('.xlsx')) {
        throw new Error('Invalid filename. Must be a .xlsx file.');
      }

      // 将工作簿导出为Excel文件
      XLSX.writeFile(this.wb, filename);
      console.log('Excel file exported successfully:', filename);
    } catch (error) {
      console.error('Error exporting Excel file:', error.message);
    }
  }
}

// 使用示例
const excelGen = new ExcelGenerator();

// 假设有以下数据
const data = [
  {
    name: 'John Doe',
    age: 30,
    job: 'Developer'
  },
  {
    name: 'Jane Doe',
    age: 25,
    job: 'Designer'
  }
];

// 添加工作表
excelGen.addWorksheet(data, 'Employees');

// 导出Excel文件
excelGen.exportExcel('employees.xlsx');