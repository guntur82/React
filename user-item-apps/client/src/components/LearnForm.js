import React, { useState } from 'react';
import { addUser } from '../fetchs/userFetch';

const LearnForm = () => {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');

  const submitHandler = () => {
    const tempObj = {
      name,
      hobby,
    };
    addUser(tempObj);
    // console.log(tempObj);
  };

  return (
    <div className="col-6">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>Add Form users</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mx-auto my-3">
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label>Hobby</label>
              <input
                onChange={(e) => setHobby(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Hobby"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={() => submitHandler()}
                type="button"
                className="btn btn-block btn-primary"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LearnForm;
