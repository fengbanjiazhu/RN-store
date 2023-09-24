import React from "react";
import { useSelector } from "react-redux";
import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Stack,
  Text,
  Image,
  Heading,
  ScrollView,
} from "native-base";

function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const products = useSelector((state) => state.product.availableProducts);

  const currentProduct = products.find((product) => product._id === id);

  const { categorySlug, img01, price, size, title } = currentProduct;

  return (
    <ScrollView>
      <Box alignItems="center" marginTop={3}>
        <Box
          maxW="80"
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
            <AspectRatio w="100%" ratio={6 / 9}>
              <Image
                source={{
                  uri: `https://github.com/fengbanjiazhu/RN-store/blob/main/assets/products/${img01}?raw=true`,
                }}
                alt="image"
              />
            </AspectRatio>
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
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's high-tech industry. The
              city is also known for its parks and nightlife.
            </Text>
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
