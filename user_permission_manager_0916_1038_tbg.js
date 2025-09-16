// 代码生成时间: 2025-09-16 10:38:32
// Importing required lodash methods
const { each, find, reject } = require('lodash');

// Define the user permission model
class User {
    constructor(id, name, roles) {
        this.id = id;
        this.name = name;
        this.roles = roles;
    }
}

// Define the permission model
class Permission {
    constructor(name, roles) {
        this.name = name;
        this.roles = roles;
    }
}

// Define the user permission manager class
class UserPermissionManager {
    constructor() {
        this.users = [];
        this.permissions = [];
    }

    // Add a new user to the system
    addUser(user) {
        if (!(user instanceof User)) {
            throw new Error('Invalid user object');
        }
        this.users.push(user);
    }

    // Add a new permission to the system
    addPermission(permission) {
        if (!(permission instanceof Permission)) {
            throw new Error('Invalid permission object');
        }
        this.permissions.push(permission);
    }

    // Check if a user has a specific permission
    hasPermission(userId, permissionName) {
        const user = find(this.users, { id: userId });
        if (!user) {
            throw new Error('User not found');
        }

        const permission = find(this.permissions, { name: permissionName });
        if (!permission) {
            throw new Error('Permission not found');
        }

        // Check if the user's roles contain the required role for the permission
        return permission.roles.some(role => user.roles.includes(role));
    }

    // Get all permissions for a user
    getUserPermissions(userId) {
        const user = find(this.users, { id: userId });
        if (!user) {
            throw new Error('User not found');
        }

        return reject(this.permissions, permission => permission.roles.every(role => !user.roles.includes(role)));
    }
}

// Example usage:
const userManager = new UserPermissionManager();

// Add users
userManager.addUser(new User(1, 'John Doe', ['admin', 'user']));
userManager.addUser(new User(2, 'Jane Doe', ['user']));

// Add permissions
userManager.addPermission(new Permission('edit', ['admin']));
userManager.addPermission(new Permission('view', ['user', 'admin']));

// Check permissions
console.log(userManager.hasPermission(1, 'edit')); // true
console.log(userManager.hasPermission(2, 'edit')); // false

// Get user permissions
console.log(userManager.getUserPermissions(1)); // [Permission { name: 'edit', roles: ['admin'] }, Permission { name: 'view', roles: ['user', 'admin'] }]
console.log(userManager.getUserPermissions(2)); // [Permission { name: 'view', roles: ['user', 'admin'] }]
