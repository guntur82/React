import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // buat redirect
import { accountLecturer, editLecturer } from '../../axios/lecturerAxios';

const EditLecturer = () => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    age: 0,
    city: '',
    image: 'http://via.placeholder.com/100',
  });

  const navigation = useNavigate();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    accountLecturer(+id, (result) => {
      setForm({
        name: result.name,
        subject: result.subject,
        age: +result.age,
        city: result.city,
        image: result.image,
      });
    });
  }, []);

  const submitHandler = () => {
    editLecturer(id, form);
    // buat redirect
    navigation('/lecturers');
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h5>Edit Lecturer</h5>
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <div className="mb-3">
            <label>Name :</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Subject :</label>
            <input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Age :</label>
            <input
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>City :</label>
            <input
              value={form.city}
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

export default EditLecturer;
