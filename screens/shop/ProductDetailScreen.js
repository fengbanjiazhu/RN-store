import React from "react";
import { ScrollView } from "native-base";

import { useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";
import CustomCarousel from "../../components/CustomCarousel";

function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const products = useSelector((state) => state.product.availableProducts);

  const currentProduct = products.find((product) => product._id === id);

  const { img01, img02 } = currentProduct;

  return (
    <ScrollView>
      <ProductCard
        product={currentProduct}
        banner={<CustomCarousel img01={img01} img02={img02} />}
        showDetail={true}
      ></ProductCard>
    </ScrollView>
  );
}

export default ProductDetailScreen;
