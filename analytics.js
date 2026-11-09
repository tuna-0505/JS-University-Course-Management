// analytics.js - Array Manipulation and Analytics Logic

// Calculates average score of all students for a specific course
export function calculateClassAverage(students, courseId) {
    const grades = [];
    
    students.forEach(student => {
        const courseRecord = student.courses.find(c => c.courseId === courseId);
        if (courseRecord) {
            grades.push(courseRecord.grade);
        }
    });

    if (grades.length === 0) return 0;
    const sum = grades.reduce((acc, curr) => acc + curr, 0);
    return (sum / grades.length).toFixed(2);
}

// Finds the student with the highest overall average using .reduce()
export function findTopStudent(students) {
    if (students.length === 0) return null;

    return students.reduce((top, current) => {
        return current.getAverage() > top.getAverage() ? current : top;
    });
}

// Higher-order generic filter function
export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}
