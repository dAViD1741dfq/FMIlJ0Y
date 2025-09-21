// 代码生成时间: 2025-09-22 00:12:21
 * @returns {Object} 转换后的JSON对象
 */
function transformJsonData(input, schema) {
    // 检查输入参数
    if (!input || typeof input !== 'object' || !schema || typeof schema !== 'object') {
        throw new Error('Invalid input or schema');
    }

    // 根据转换规则处理每个字段
    const result = {};
    for (const key in schema) {
        const field = schema[key];
        if (!field.source) {
            throw new Error(`Missing source field in schema for key ${key}`);
        }
        const value = input[field.source];
        if (field.transform) {
            // 调用转换函数
            result[key] = field.transform(value);
        } else {
            // 直接复制值
            result[key] = value;
        }
    }
    return result;
}

/**
 * 示例转换函数：将字符串转换为大写
 * @param {string} value - 输入值
 * @returns {string} 大写字符串
 */
function toUpperCase(value) {
    return value.toUpperCase();
}

// 示例用法
const inputJson = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

const schema = {
    fullName: {
        source: 'name',
        transform: toUpperCase
    },
    age: {
        source: 'age'
    },
    location: {
        source: 'city',
        transform: toUpperCase
    }
};

try {
    const outputJson = transformJsonData(inputJson, schema);
    console.log('Transformed JSON:', outputJson);
} catch (error) {
    console.error('Error transforming JSON:', error.message);
}