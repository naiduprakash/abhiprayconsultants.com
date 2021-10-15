import buildingBannerImg from '../assets/images/building-banner.jpg';
import {
  Box,
  Button,
  Flex,
  Circle,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  useOutsideClick,
  Grid,
  GridItem,
  Container,
  Link,
  Image,
} from '@chakra-ui/react';

function Home() {
  return (
    <Box w="100%">
      <Image src={buildingBannerImg} alt="banner" w="100%" h="auto" />
    </Box>
  );
}

export default Home;
