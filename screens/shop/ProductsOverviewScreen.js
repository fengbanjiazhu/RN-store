import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "native-base";

import ProductList from "../../components/ProductList";

function ProductsOverviewScreen({ navigation }) {
  const productData = useSelector((state) => state.product.availableProducts);

  return (
    <FlatList
      data={productData}
      renderItem={({ item }) => <ProductList product={item} navigation={navigation} />}
      keyExtractor={(item) => item._id}
    />
  );
}

export default ProductsOverviewScreen;
