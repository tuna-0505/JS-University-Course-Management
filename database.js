// database.js - Simulated Asynchronous Database API

export function fetchStudents(callback) {
    console.log("Fetching data from database...");

    // Simulate 2-second delay using setTimeout
    setTimeout(() => {
        const rawData = [
            { id: 1, name: "Ali", courses: [{ courseId: 101, grade: 90 }, { courseId: 102, grade: 85 }] },
            { id: 2, name: "Zeynep", courses: [{ courseId: 101, grade: 70 }, { courseId: 102, grade: 95 }] },
            { id: 3, name: "Ahmet", courses: [{ courseId: 101, grade: 60 }, { courseId: 102, grade: 55 }] }
        ];

        console.log("Data received!\n");
        callback(rawData);
    }, 2000);
}
