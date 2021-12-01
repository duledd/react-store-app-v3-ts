import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import storeContext from "../../store-context/storeContext";
import { ProductCard } from "../product-card/ProductCard";

export const ProductDetails = () => {
  const params = useParams();
  const { addToCart } = useContext(storeContext);
  const { id } = params;

  const [product, setProduct] = useState({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {},
    title: "",
  });

  const fetchSingleProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`); //GET METHOD BY DEFAULT IN JS
    const product = await response.json();

    setProduct(product);
  };

  useEffect(() => {
    //COMPONENT DID MOUNT

    const interval = setInterval(() => {
      console.log("Every 2 seconds");
    }, 2000);

    fetchSingleProduct(id);

    return () => {
      //COMPONENT WILL UNMOUNT

      console.log("COMPONENT WILL UNMOUNT");
      clearInterval(interval);
    };
  }, [id]);

  return (
    <div>
      <Link to={"/products"}>
        <p>Go back to all products</p>
      </Link>

      <h1>Product: </h1>
      {product.title ? (
        <ProductCard
          product={product}
          addToCart={addToCart}
          showDetails={false}
        />
      ) : (
        <p>Loading...</p>
      )}

      
      <Outlet />
    </div>
  );
};
