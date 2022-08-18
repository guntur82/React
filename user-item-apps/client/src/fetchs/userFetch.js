import axios from 'axios';

const URL = 'http://localhost:3000';
const getUsers = (cb) => {
  axios({
    method: 'GET',
    url: `${URL}/users`,
  })
    .then((result) => {
      // console.log(result.data);
      cb(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const addUser = (obj) => {
  const { name, hobby } = obj;
  axios({
    method: 'POST',
    url: `${URL}/users`,
    data: {
      name,
      hobby,
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteUser = (id) => {
  axios({
    method: 'DELETE',
    url: `${URL}/users/${id}`,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const infoUser = (id) => {
  axios({
    method: 'GET',
    url: `${URL}/users/${id}`,
  })
    .then((result) => {
      const { id, name, hobby } = result.data;
      alert(`id: ${id}, name: ${name}, hobby: ${hobby}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getUsers, addUser, deleteUser, infoUser };
