// 代码生成时间: 2025-10-03 23:32:47
const _ = require('lodash');

// OnlineLearningPlatform class definition
class OnlineLearningPlatform {
  // Constructor to initialize platform with courses
  constructor(courses = []) {
    this.courses = courses;
  }

  // Method to add a new course to the platform
  addCourse(course) {
    if (!_.isObject(course)) {
      throw new Error('Invalid course. Course must be an object.');
    }
    if (!('title' in course) || !('description' in course) || !('duration' in course)) {
      throw new Error('Invalid course properties. Course must have title, description, and duration.');
    }
    this.courses.push(course);
    console.log(`Course '${course.title}' added successfully!`);
  }

  // Method to remove a course from the platform by title
  removeCourseByTitle(title) {
    const index = this.courses.findIndex(course => course.title === title);
    if (index === -1) {
      throw new Error(`Course with title '${title}' not found.`);
    }
    this.courses.splice(index, 1);
    console.log(`Course '${title}' removed successfully!`);
  }

  // Method to get a course by title
  getCourseByTitle(title) {
    const course = this.courses.find(course => course.title === title);
    if (!course) {
      throw new Error(`Course with title '${title}' not found.`);
    }
    return course;
  }

  // Method to list all courses
  listCourses() {
    return this.courses;
  }
}

// Usage example
try {
  const platform = new OnlineLearningPlatform();
  platform.addCourse({
    title: 'JavaScript Basics',
    description: 'Learn the fundamentals of JavaScript',
    duration: '2 hours'
  });
  platform.addCourse({
    title: 'Advanced JavaScript',
    description: 'Dive deeper into JavaScript',
    duration: '4 hours'
  });

  const course = platform.getCourseByTitle('JavaScript Basics');
  console.log('Retrieved course:', course);

  platform.removeCourseByTitle('Advanced JavaScript');
  console.log('Courses after removal:', platform.listCourses());
} catch (error) {
  console.error('An error occurred:', error.message);
}