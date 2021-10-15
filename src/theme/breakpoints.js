import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em', // 16px * 30 = 480px
  md: '48em', // 16px * 30 = 768px
  lg: '62em', // 16px * 30 = 992px
  xl: '80em', // 16px * 30 = 1280px
  '2xl': '96em', // 16px * 30 = 1536px
});

export default breakpoints;