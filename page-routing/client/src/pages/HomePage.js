import React from 'react';
import { MdAssignment } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className="my-3">
      <div className="w-100 text-center my-3">
        <h3>HomePage</h3>
        <p>Welcome to my Dashboard Class App.</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-7 mx-auto">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img
                  className="img-card-top rounded-circle"
                  src="https://via.placeholder.com/150"
                />
                <div className="card-body">
                  <div className="home-icons">
                    <MdAssignment />
                  </div>
                  <div className="home-title">
                    <h5>Easy to Assign</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  className="img-card-top rounded-circle"
                  src="https://via.placeholder.com/150"
                />
                <div className="card-body">
                  <div className="home-icons">
                    <MdAssignment />
                  </div>
                  <div className="home-title">
                    <h5>Easy to Assign</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  className="img-card-top rounded-circle"
                  src="https://via.placeholder.com/150"
                />
                <div className="card-body">
                  <div className="home-icons">
                    <MdAssignment />
                  </div>
                  <div className="home-title">
                    <h5>Easy to Assign</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
