import React, { useState } from 'react';
import NowLoading from './NowLoading';
import { getUsers, deleteUser, infoUser } from '../fetchs/userFetch';

const Profile = () => {
  const [users, setUsers] = useState([]);

  const getUserhandler = () => {
    getUsers((result) => setUsers(result));
  };

  return (
    <div className="col-6">
      <table className="table table-hover table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hobby</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length !== 0 ? (
            users.map((user, i) => {
              const { id, name, hobby } = user;
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{name}</td>
                  <td>{hobby}</td>
                  <td>
                    {/* <button
                      onClick={() => console.log('edit')}
                      className="btn btn-sm btn-info"
                    >
                      Edit
                    </button> */}
                    <button
                      onClick={() => deleteUser(id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => infoUser(id)}
                      className="btn btn-sm btn-info"
                    >
                      Info
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <NowLoading />
          )}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => getUserhandler()}
          className="btn btn-sm btn-info"
        >
          Get User
        </button>
      </div>
    </div>
  );
};

export default Profile;
