import { Container, Text, VStack, Box, Heading, Button, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCode, FaChalkboardTeacher, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to CodeMaster</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate platform to learn coding from scratch to advanced levels.</Text>
        
        <Flex direction="row" justify="center" align="center" wrap="wrap" gap={6}>
          <Box textAlign="center">
            <IconButton aria-label="Learn Coding" icon={<FaCode />} size="lg" isRound />
            <Text mt={2}>Learn Coding</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Expert Instructors" icon={<FaChalkboardTeacher />} size="lg" isRound />
            <Text mt={2}>Expert Instructors</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Get Started" icon={<FaRocket />} size="lg" isRound />
            <Text mt={2}>Get Started</Text>
          </Box>
        </Flex>
        
        <Link to="/courses">
          <Button colorScheme="teal" size="lg">Explore Courses</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;