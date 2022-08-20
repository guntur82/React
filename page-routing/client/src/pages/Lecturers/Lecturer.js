import React from 'react';
//fungsi outlet digunakan untuk child bisa dilihat listnya di MainContent di bagian lecturer memiliki 3 anak
import { Outlet } from 'react-router-dom';

const Lecturer = () => {
  return (
    <div className="my-3">
      <div className="w-100 my-3 text-center">
        <div className="flex">
          <h3>Lecturer</h3>
          <p>Lecturers list of this class room</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Lecturer;
