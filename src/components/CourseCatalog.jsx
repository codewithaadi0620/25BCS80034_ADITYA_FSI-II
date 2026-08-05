import React from 'react';
import CourseList from './CourseList';

function CourseCatalog({ onEnroll }) {
  return (
    <div>
      <h2>Course Catalog</h2>
      <CourseList onEnroll={onEnroll} />
    </div>
  );
}

export default CourseCatalog;

