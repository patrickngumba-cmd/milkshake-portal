import { Routes, Route, Link } from 'react-router-dom';

// Importing the pages we just created
import Home from './routes/Home';
import Shop from './routes/Shop';
import Admin from './routes/Admin';

function App() {
  return (
    <div>
      {/* This is our Navigation Bar */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/shop">Shop Menu</Link> |{" "}
        <Link to="/admin">Admin Portal</Link>
      </nav>

      <hr />

      {/* This tells React which component to show based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;