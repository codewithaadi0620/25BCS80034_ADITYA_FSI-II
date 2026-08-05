import React from 'react';
import StudentProfile from './StudentProfile';

function CourseList({ onEnroll }) {
  const courses = [
    { title: 'React Basics', price: 999 },
    { title: 'Node.js Essentials', price: 1199 },
    { title: 'UI/UX Design', price: 799 },
  ];

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.title} style={{ marginBottom: '12px' }}>
            <span style={{ marginRight: '12px' }}>{course.title}</span>
            <span style={{ marginRight: '12px' }}>₹{course.price}</span>
            <button onClick={onEnroll}>Enroll</button>
          </li>
        ))}
      </ul>
      <StudentProfile />
    </div>
  );
}

export default CourseList;
