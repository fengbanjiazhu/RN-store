import React from "react";
import { useSelector } from "react-redux";
import { Box, Center, HStack, Stack, Text, Heading, ScrollView, Button } from "native-base";

import CustomCarousel from "../../components/CustomCarousel";
import { imageSource } from "../../utils/imageSource";

function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const products = useSelector((state) => state.product.availableProducts);

  const currentProduct = products.find((product) => product._id === id);

  const { categorySlug, img01, img02, price, size, title, description } = currentProduct;

  const imgs = [imageSource(img01), imageSource(img02)];
  return (
    <ScrollView>
      <Box alignItems="center" marginTop={1}>
        <Box
          maxW="500"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <CustomCarousel img01={img01} img02={img02} images={imgs} />
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "500",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              {title.toUpperCase()}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <HStack justifyContent={"space-between"}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {`$${price} AUD`}
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {`${categorySlug} [${size.join(" / ")}]`}
                </Text>
              </Stack>
              <Button onPress={() => console.log("hello world")}>Add to cart</Button>
            </HStack>
            <Text fontWeight="400">{description}</Text>
          </Stack>
        </Box>
      </Box>
    </ScrollView>
  );
}

export default ProductDetailScreen;
