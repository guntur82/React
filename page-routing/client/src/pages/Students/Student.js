import React from 'react';
import { Outlet } from 'react-router-dom';

const Student = () => {
  return (
    <div className="my-3">
      <h3>Student</h3>
      <Outlet />
    </div>
  );
};

export default Student;
