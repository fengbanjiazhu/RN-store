import React from "react";
import { TouchableOpacity } from "react-native";
import ProductCard from "./ProductCard";
import ProductImage from "./ProductImage";

function ProductList({ product, navigation }) {
  const { _id, img01, title } = product;

  const jumpToDetail = () => navigation.navigate("DetailScreen", { id: _id, title });

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={jumpToDetail}>
      <ProductCard product={product} banner={<ProductImage img={img01} />} />
    </TouchableOpacity>
  );
}

export default ProductList;
