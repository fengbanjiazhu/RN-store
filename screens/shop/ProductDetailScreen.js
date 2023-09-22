import React from "react";
import { FlatList, Text } from "native-base";
import { useSelector } from "react-redux";

function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const products = useSelector((state) => state.product.availableProducts);

  const currentProduct = products.find((product) => product._id === id);

  // console.log(currentProduct);

  return <Text>ProductDetailScreen</Text>;
}

export default ProductDetailScreen;
