import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import TaskDetails from './pages/TaskDetails';
import EditTask from './pages/EditTask';
import Navbar from "./components/Navbar";
import './index.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/tasks/add' element={<AddTask/>}/>
        <Route path='/tasks/:id' element={<TaskDetails/>}/>
        <Route path='/tasks/edit/:id' element={<EditTask/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
