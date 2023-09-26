import React from "react";
import { Box, Center, HStack, Stack, Text, Heading, Button } from "native-base";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

function ProductCard({ product, banner, showDetail = false }) {
  const { categorySlug, price, size, title, description } = product;

  const dispatch = useDispatch();

  return (
    <Box alignItems="center" marginTop={3}>
      <Box
        maxW={showDetail ? "500" : "320"}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          {banner}
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

            {showDetail && (
              <Button onPress={() => dispatch(addItem(currentProduct))}>Add to cart</Button>
            )}
          </HStack>
          {showDetail && <Text fontWeight="400">{description}</Text>}
        </Stack>
      </Box>
    </Box>
  );
}

export default ProductCard;
