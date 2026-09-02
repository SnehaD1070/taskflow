import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
      <h2>TaskFlow 🚀</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/tasks/add">Add Task</Link>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
