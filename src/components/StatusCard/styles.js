import {calcWidth, calculate, fontSize} from '~utils';
import {colors, globalStyle} from '../config';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...globalStyle.fdr,
    ...globalStyle.asc,
    ...globalStyle.jccaic,
    paddingHorizontal: fontSize(11),
    paddingVertical: fontSize(8),
    borderRadius: fontSize(20),
    alignItems: 'center',
    marginBottom: 10,
  },
  svg: {
    width: fontSize(16),
    height: fontSize(16),
  },
  text: {
    marginHorizontal: 5,
    fontSize: fontSize(12),
  },
});
export default styles;
