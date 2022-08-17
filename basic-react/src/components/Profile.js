import React, { useState } from 'react';
import NowLoading from './NowLoading';

const Profile = () => {
  const [users, setUsers] = useState([
    {
      name: 'Guntur',
      hobby: 'Maen game',
    },
    {
      name: 'Gabu',
      hobby: 'turu',
    },
  ]);
  return (
    <div className="table-profile">
      <table className="table table-hover table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {users.length !== 0 ? (
            users.map((user, i) => {
              const { name, hobby } = user;
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{name}</td>
                  <td>{hobby}</td>
                </tr>
              );
            })
          ) : (
            <NowLoading />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
