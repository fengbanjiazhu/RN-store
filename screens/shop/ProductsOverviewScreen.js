import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "native-base";

import ProductList from "../../components/ProductList";

function ProductsOverviewScreen({}) {
  const productData = useSelector((state) => state.product.availableProducts);

  return (
    <FlatList
      data={productData}
      renderItem={({ item }) => <ProductList product={item} />}
      keyExtractor={(item) => item._id}
    />
  );
}

export default ProductsOverviewScreen;
