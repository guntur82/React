import React, { useState } from 'react';

const LearnButton = () => {
  const [number, setnumber] = useState(0);
  const addNumber = () => {
    console.log('add');
    let jumlah = number + 1;
    jumlah > 10 ? alert(`Number tidak boleh lebih dari 10`) : setnumber(jumlah);
  };
  const substractNumber = () => {
    console.log('substract');
    let kurang = number - 1;
    kurang < 0 ? alert(`Number tidak boleh kurang dari 0`) : setnumber(kurang);
  };
  return (
    <div className="container text-center">
      <button onClick={() => addNumber()} className="btn btn-sm btn-primary">
        Add
      </button>
      <h1>{number}</h1>
      <button
        onClick={() => substractNumber()}
        className="btn btn-sm btn-danger"
      >
        Substract
      </button>
    </div>
  );
};

export default LearnButton;
