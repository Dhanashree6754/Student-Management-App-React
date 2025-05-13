// import logo from './logo.svg';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import Protectedroute from './Components/Protectedroute';
import EditStudent from './Components/EditStudent';
import ShowData from './Components/ShowData';

function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar /> <br />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/showdata' element={<Protectedroute><ShowData /></Protectedroute>} />
          <Route path='/edit/:id' element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
