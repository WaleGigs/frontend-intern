import React from 'react';
import {  useLocation } from 'react-router-dom';
const OutputPage = (props) => {
    const location = useLocation
  const { data } = props.location.state;

  return (
    <div>
      <h1>Output Page</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default OutputPage;
