import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import EditProductForm from './components/EditProductForm';
import Header from './components/Header';
import NewProductForm from "./components/NewProductForm";
import ProductsList from './components/ProductsList';

function App() {
  const [editProduct, setEditProduct] = useState({});
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList setEditProduct={setEditProduct} />} />
        <Route path="/newProduct" element={<NewProductForm />} />
        <Route path="/editProduct" element={<EditProductForm product={editProduct} />} />
      </Routes>
      {/* <Footer /> */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </div>
  );
}

export default App;
