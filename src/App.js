import react from 'react';
import AllProduct from './pages/AllProduct';
import CreateProduct from './pages/CreateProduct';
import DeleteProduct from './pages/DeleteProduct';
import EditProduct from './pages/EditProduct';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {ProductContextData} from './ProductContext'
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (<div className="container">
    <Router>
     
      <nav className="navbar navbar-expand-sm bg-light">

        <div className="container-fluid">
         
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit">Update</Link>
            </li>
          </ul>
        </div>

      </nav>
      <ProductContextData>
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
      </Routes>
      </ProductContextData>
    </Router>
  </div>)
}