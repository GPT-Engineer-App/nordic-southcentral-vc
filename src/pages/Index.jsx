import { Box, Container, Flex, Heading, Image, Input, Text, VStack, Button, SimpleGrid, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FaBuilding, FaChartLine, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="brand.800" w="100%" p={4} color="white" position="fixed" top="0" zIndex="3">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading size="lg">VC Firm</Heading>
            <Button colorScheme="blue" variant="outline">Contact Us</Button>
          </Flex>
        </Container>
      </Box>

      <Box as="section" bg="gray.100" py={10} px={6} textAlign="center" pt="100px">
        <Heading mb={4} size="2xl">Empowering Innovation</Heading>
        <Text fontSize="xl">Investing in the future of the Nordics and South Central Europe</Text>
        <Image src="https://via.placeholder.com/1200x500" alt="VC Firm Hero Image" mt={4} borderRadius="md" />
      </Box>

      <Box as="section" py={10} px={6}>
        <Heading mb={4} size="xl">Investment Principles</Heading>
        <Text fontSize="lg">We believe in a hands-on approach to venture capital, focusing on sustainable growth and long-term partnerships.</Text>
      </Box>

      <Box as="section" bg="gray.50" py={10} px={6}>
        <Heading mb={4} size="xl">Areas of Interest</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack>
            <FaChartLine size="3em" />
            <Text fontSize="md">Emerging Technologies</Text>
          </VStack>
          <VStack>
            <FaBuilding size="3em" />
            <Text fontSize="md">Real Estate Innovations</Text>
          </VStack>
          <VStack>
            <FaMapMarkedAlt size="3em" />
            <Text fontSize="md">Geographical Expansions</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      <Box as="section" py={10} px={6}>
        <Heading mb={4} size="xl">Portfolio Companies</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Image src="https://via.placeholder.com/200" alt="Company Logo" p={2} />
          <Image src="https://via.placeholder.com/200" alt="Company Logo" p={2} />
          <Image src="https://via.placeholder.com/200" alt="Company Logo" p={2} />
          <Image src="https://via.placeholder.com/200" alt="Company Logo" p={2} />
        </Flex>
      </Box>

      <Box as="section" bg="gray.100" py={10} px={6}>
        <Heading mb={4} size="xl">Contact Us</Heading>
        <Flex direction="column" align="center" maxW="md" mx="auto">
          <FormControl id="email" mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="gray" variant="solid" bg="black" color="white">Contact</Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;