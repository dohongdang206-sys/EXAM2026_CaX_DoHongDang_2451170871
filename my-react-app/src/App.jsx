import { useState } from "react";

import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

import productsData from "./data/data";

function App() {
  const [products, setProducts] = useState(productsData);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="container mt-4">
      <Header />

      <div className="row">
        <div className="col-md-5 mb-3">
          <ProductForm onAdd={addProduct} />
        </div>

        <div className="col-md-7">
          <ProductTable products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;