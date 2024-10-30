import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="app">
      <nav className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/create">Create a Crewmate</Link>
        <Link to="/gallery">Crewmate Gallery</Link>
      </nav>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
