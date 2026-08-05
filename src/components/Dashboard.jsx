import React, { useState } from 'react';
import useUser from '../hooks/useUser';
import CourseCatalog from './CourseCatalog';

function Dashboard() {
  const user = useUser();
  const [enrolledCount, setEnrolledCount] = useState(0);

  return (
    <div>
      <header>
        <h1>Dashboard</h1>
        <p>Welcome, {user.name}</p>
        <p>Enrolled: {enrolledCount} courses</p>
      </header>
      <CourseCatalog onEnroll={() => setEnrolledCount((prev) => prev + 1)} />
    </div>
  );
}
export default Dashboard;

