import react, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
const API = "http://localhost:3000/api";
const LIMIT = 1;
const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    if (categoryId == null) {
      return;
    }
    getProduct();
  }, [categoryId, currentPage]);
  const getCategories = async () => {
    const response = await axios.get(`${API}/category`);
    setCategories(response.data);
  };
  const getProduct = async () => {
    const response = await axios.get(
      `${API}/products?page=${currentPage}&limit=${LIMIT}&category_id=${categoryId}`
    );
    setProducts(response.data.products);
    setTotalPages(response.data.totalPages);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar categories={categories} onCategorySelect={setCategoryId} />
      <div style={{ paddingLeft: "20px", flexGrow: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {totalPages ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductList;
