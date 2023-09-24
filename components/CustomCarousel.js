import { Center } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import ProductImage from "./ProductImage";

function CustomCarousel({ img01, img02 }) {
  const imgData = [img01, img02];
  const width = Dimensions.get("window").width;
  return (
    <Center>
      <Carousel
        loop
        width={400}
        height={width * 1.5}
        autoPlay={true}
        data={imgData}
        scrollAnimationDuration={1500}
        renderItem={({ item, index }) => <ProductImage key={index} img={item} />}
      />
    </Center>
  );
}

export default CustomCarousel;
