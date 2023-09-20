import React from "react";
import { FlatList } from "native-base";
import { useSelector } from "react-redux";

function UserProductsScreen() {
  const products = useSelector((state) => state.product.availableProducts);
  return <FlatList>UserProductsScreen</FlatList>;
}

export default UserProductsScreen;
