"use client";
import BuyresidentialsPage from "@/components/template/BuyresidentialsPage";
import { useEffect, useState } from "react";

function BuyResidential() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(`Error fetching product data: ${error.message}`);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <BuyresidentialsPage products={products} />

    </div>
  );
}

export default BuyResidential;
