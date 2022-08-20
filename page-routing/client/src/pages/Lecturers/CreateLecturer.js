import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // buat redirect
import { addLecturer } from '../../axios/lecturerAxios';

const CreateLecturer = () => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    age: 0,
    city: '',
    image: 'http://via.placeholder.com/100',
  });

  const navigation = useNavigate();
  const submitHandler = () => {
    addLecturer(form);
    // buat redirect
    navigation('/lecturers');
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h5>Create Lecturer</h5>
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <div className="mb-3">
            <label>Name :</label>
            <input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Subject :</label>
            <input
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Age :</label>
            <input
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>City :</label>
            <input
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <div className="mb-3">
              <button
                onClick={() => submitHandler()}
                className="btn btn-block btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLecturer;
