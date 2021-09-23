import {colors, globalStyle} from '../config';

import {StyleSheet} from 'react-native';
import { fontSize } from '~utils';
import { sizes,fonts } from '../config/fonts';


const styles = StyleSheet.create({
  Container: {
    ...globalStyle.jccaic,
    ...globalStyle.asc,
    borderRadius: fontSize(15),
    paddingVertical: fontSize(4),
    paddingHorizontal: fontSize(10),
  },
  TextStyle: {
    fontSize: sizes.h6,
    ...fonts.Normal,
  },
});

export default styles;