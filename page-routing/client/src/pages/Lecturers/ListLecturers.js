import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusSquare } from 'react-icons/fi';
import LoadingBar from '../../helpers/LoadingBar';
import { getLecturers, removeLecturer } from '../../axios/lecturerAxios';

const ListLecturers = () => {
  const [lecturers, setLecturers] = useState([]);
  useEffect(() => {
    //callback dari lecturers di folder axios
    getLecturers((result) => setLecturers(result));
  }, []);
  const deleteHandler = (id) => {
    removeLecturer(id);
  };
  return (
    <>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link
              to="/lecturers/create"
              className="btn btn-sm btn-primary my-2"
            >
              <span className="me-2">
                <FiPlusSquare></FiPlusSquare>
              </span>
              Add Lecturer
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-border">
              <thead>
                <tr className="table-primary">
                  <th>No</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lecturers.length > 0 ? (
                  lecturers.map((lecturer, key) => {
                    const { id, name, subject, age, city } = lecturer;
                    return (
                      <tr key={id}>
                        <td>{key + 1}</td>
                        <td>{name}</td>
                        <td>{subject}</td>
                        <td>{age}</td>
                        <td>{city}</td>
                        <td>
                          <Link
                            to={`/lecturers/edit/${id}`}
                            className="btn btn-sm btn-info"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteHandler(+id)}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <LoadingBar />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListLecturers;
