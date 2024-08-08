import React from "react";
import coffeedata from "../../../../data/coffeedata";
import DetailsProducts from "@/components/template/DetailsProducts";

function DetailsPage({ params }) {
  const { productId } = params;
  const product = coffeedata.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <DetailsProducts product={product} />;
}

export default DetailsPage;
