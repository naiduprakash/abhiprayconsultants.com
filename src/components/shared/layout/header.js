import { Box, Flex, Container, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
function Header() {
  return (
    <Box as={'header'} bgColor="purple" color="white" position="fixed" left="0" right="0">
      <Container
        maxW="8xl"
        h="4.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Box fontSize="1.5rem">Abhipray Consultants</Box>
          <Box fontSize="0.63rem">PROJECT CONSULTING & ENGINEERING SERVICES</Box>
        </Box>
        <Flex flex="1" justify="flex-end">
          <Link as={ReactLink} to="/" p="5px 10px">
            Home
          </Link>
          <Link as={ReactLink} to="/about-us" p="5px 10px">
            About Us
          </Link>
          <Link as={ReactLink} to="/services" p="5px 10px">
            Services
          </Link>
          <Link as={ReactLink} to="/projects" p="5px 10px">
            Projects
          </Link>
          <Link as={ReactLink} to="/clients" p="5px 10px">
            Clients
          </Link>
          <Link as={ReactLink} to="/career" p="5px 10px">
            Career
          </Link>
          <Link as={ReactLink} to="/contacts" p="5px 10px">
            Contacts
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
