import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='p-3 bg-secondary'>
        <Link to={'/'} className='p-2 text-white me-5'>Home</Link>
        <Link to={'/register'} className='p-2 text-white me-5'>Register</Link>
        <Link to={'/login'} className='p-2 text-white me-5'>Login</Link>
        <Link to={'/showdata'} className='p-2 text-white me-5'>Show Data</Link>
      </nav>
    </>
  );
}

export default Navbar;
