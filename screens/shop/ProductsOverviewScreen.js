import React from "react";
import { useSelector } from "react-redux";
import { FlatList, View } from "native-base";

import ProductList from "../../components/ProductList";

function ProductsOverviewScreen({ navigation }) {
  const productData = useSelector((state) => state.product.availableProducts);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={productData}
        renderItem={({ item }) => <ProductList product={item} navigation={navigation} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

export default ProductsOverviewScreen;
