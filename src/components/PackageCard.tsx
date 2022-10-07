import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { Colors } from "../utils/colors";

export default function PackageCard() {
  return (
    <Box
      borderRadius={20}
      backgroundColor={Colors.deepPurple}
      p={5}
      maxWidth={450}
      shadow="dark-lg"
    >
      <HStack alignContent="center" justifyContent="space-between">
        <VStack color="white">
          <Text fontSize={18}>Cremation package for</Text>
          <Text fontSize={28}>Toronto & GTA</Text>
        </VStack>
        <VStack color="white">
          <Text fontSize={36}>$1,675</Text>
          <Text fontSize={18}>Total including tax</Text>
        </VStack>
      </HStack>
      <HStack alignItems="center" justifyContent="center" mt={10}>
        <Button
          backgroundColor="white"
          px={8}
          py={6}
          borderRadius={36}
          textColor={Colors.mainBlue}
        >
          Get Started
        </Button>
      </HStack>
    </Box>
  );
}
