import axios from 'axios';
import Swal from 'sweetalert2';
const URL = 'http://localhost:3000/lecturers';
const getLecturers = async (cb) => {
  try {
    let lecturers = await axios({
      method: 'GET',
      url: URL,
    });
    cb(lecturers.data);
  } catch (error) {
    console.log(error);
  }
};
const addLecturer = async (data) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + '/create',
      data: data,
    });
    Swal.fire('Add Lecturer', 'Lecturer has been added', 'success');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
const editLecturer = async (id, data) => {
  try {
    let result = await axios({
      method: 'PUT',
      url: URL + '/update/' + id,
      data: data,
    });
    Swal.fire('Edit Lecturer', 'Lecturer ' + id + 'has been update', 'success');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
const removeLecturer = async (id) => {
  try {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // di routenya /delete from "get" to "delete" karena udh pake axios
        let result = await axios({
          method: 'DELETE',
          url: URL + '/delete/' + id,
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        window.location.reload();
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const accountLecturer = async (id, cb) => {
  try {
    let result = await axios({
      method: 'GET',
      url: URL + '/information/' + id,
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

export {
  getLecturers,
  addLecturer,
  editLecturer,
  removeLecturer,
  accountLecturer,
};
