import React, { useEffect, useState } from 'react';
import { fetchStudents, deleteStudent } from '../Services/api'; // Ensure we're using the correct imports
import { useNavigate } from 'react-router-dom';

const ShowData = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Handle edit button click
  const handleEdit = (student) => {
    navigate(`/edit/${student.id}`); // Navigate to the edit page for the selected student
  };

  // Fetch all students when the component mounts
  useEffect(() => {
    fetchStudents()
      .then((data) => {
        console.log("Fetched Students:", data);
        setStudents(data);
      })
      .catch((error) => {
        console.log(`Failed to fetch data. ${error}`);
      });
  }, []);

  // Handle delete button click
  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents(students.filter(std => std.id !== id)); // Update the students list after deletion
    alert("Student Deleted Successfully..!");
  };

  return (
    <div className='container'>
      <h2 className='mt-4'>Student List</h2>
      <table className='table table-bordered mt-4'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((std) => (
              <tr key={std.id}>
                <td>{std.name}</td>
                <td>{std.email}</td>
                <td>{std.password}</td>
                <td>{std.department}</td>
                <td>
                  <button
                    className='btn btn-primary me-3'
                    onClick={() => handleEdit(std)} // Edit button
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-danger me-3'
                    onClick={() => handleDelete(std.id)} // Delete button
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className='text-danger'>
                No Students Found..!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
