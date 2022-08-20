import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  Lecturer,
  ListLecturers,
  CreateLecturer,
  EditLecturer,
  Student,
  Sample,
} from '../pages';

const MainContent = () => {
  return (
    <div className="container p-3">
      {/* <h3>Dashboard Class Room</h3> */}
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="lecturers" element={<Lecturer />}>
          <Route path="" element={<ListLecturers />}></Route>
          <Route path="create" element={<CreateLecturer />}></Route>
          <Route path="edit">
            <Route path=":id" element={<EditLecturer />}></Route>
          </Route>
        </Route>
        <Route path="students" element={<Student />}>
          <Route path="" element={<Sample />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
