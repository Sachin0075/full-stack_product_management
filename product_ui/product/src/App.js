import './App.css';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/AddProduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
