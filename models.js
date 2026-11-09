// models.js - Class Structures and Immutability Logic

export class Student {
    constructor(id, name, courses = []) {
        // Immutability Requirement: Read-only and non-configurable ID
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true
        });

        this.name = name;
        this.courses = courses;
    }

    // Add a new course record
    addCourse(courseId, grade) {
        this.courses.push({ courseId, grade });
    }

    // Calculate student average across all enrolled courses
    getAverage() {
        if (this.courses.length === 0) return 0;
        const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
        return total / this.courses.length;
    }
}
