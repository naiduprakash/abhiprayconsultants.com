import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import breakpoints from "./breakpoints";
import sizes from "./sizes";
import {fonts} from "./fonts";

export default extendTheme({ sizes, breakpoints, styles,fonts });
