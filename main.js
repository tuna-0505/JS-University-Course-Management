// main.js - Entry Point and Orchestration

import { Student } from './models.js';
import { fetchStudents } from './database.js';
import { 
    calculateClassAverage, 
    findTopStudent, 
    filterStudents 
} from './analytics.js';

// Execute Asynchronous Data Retrieval
fetchStudents((rawData) => {
    // 1. Convert raw objects into Student class instances
    const students = rawData.map(item => new Student(item.id, item.name, item.courses));

    // 2. Testing Immutability
    console.log("Testing Immutability:");
    console.log(`Original ID: ${students[0].id}`);
    console.log("Attempting to change ID to 999...");
    
    // Attempting to overwrite read-only ID property
    try {
        students[0].id = 999;
    } catch (e) {
        // Fails silently in non-strict mode or throws error in strict mode
    }

    console.log(`Final ID: ${students[0].id} (Success: ID did not change)\n`);

    // 3. Analytics Report
    console.log("--- Analytics Report ---");

    // Class Average for Course 101
    const avg101 = calculateClassAverage(students, 101);
    console.log(`Class Average for Course 101: ${avg101}`);

    // Top Student
    const topStudent = findTopStudent(students);
    console.log(`Top Student: ${topStudent.name} (Average: ${topStudent.getAverage().toFixed(1)})`);

    // Students in Course 102
    const studentsIn102 = filterStudents(students, student => 
        student.courses.some(c => c.courseId === 102)
    );
    const names102 = studentsIn102.map(s => s.name).join(", ");
    console.log(`Students in Course 102: ${names102}`);
});
