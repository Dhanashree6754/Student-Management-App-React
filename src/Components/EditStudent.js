import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: 'Science',  // Default department set to 'Science'
  });

  // Fetch existing student data on component mount
  useEffect(() => {
    const fetchStudent = async () => {
      const response = await fetch(`${API_URL}/students/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        alert('Student not found!');
        navigate('/showdata'); // Navigate to showdata if the student does not exist
      }
    };
    fetchStudent();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You could validate the form here if necessary
    await fetch(`${API_URL}/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    alert("Student data updated successfully!");
    navigate('/showdata'); // Navigate back to show data page
  };

  return (
    <div className='container'>
      <div className="card p-3 mt-5">
        <h4 className='text-warning'>Edit Student</h4>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name='name'
              className='form-control'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              className='form-control'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name='password'
              className='form-control'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="department">Department</label>
            <select
              name="department"
              className='form-control'
              value={formData.department}
              onChange={handleChange}
            >
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>
          </div>

          <button className='btn btn-primary me-2' type='submit'>Update</button>
          <button
            className='btn btn-danger me-2 text-white'
            type="button"
            onClick={() => navigate('/showdata')}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
