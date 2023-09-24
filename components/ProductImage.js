import { AspectRatio, Image } from "native-base";
import React from "react";

function ProductImage({ img }) {
  return (
    <AspectRatio w="100%" ratio={6 / 9}>
      <Image
        source={{
          uri: `https://github.com/fengbanjiazhu/RN-store/blob/main/assets/products/${img}?raw=true`,
        }}
        alt="image"
      />
    </AspectRatio>
  );
}

export default ProductImage;
