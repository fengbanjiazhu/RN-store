import React from "react";
import { useSelector } from "react-redux";
import { Box, Center, HStack, Stack, Text, Heading, ScrollView } from "native-base";

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
                {`${categorySlug} [${size.join("/")}]`}
              </Text>
            </Stack>
            <Text fontWeight="400">{description}</Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </ScrollView>
  );
}

export default ProductDetailScreen;
