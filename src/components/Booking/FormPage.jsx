import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary validation or data manipulation here before redirecting
    navigate.push('/output', { data: formData });
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
       
      
        Submit
       
        </button>
      </form>
    </div>
  );
};

export default FormPage;
