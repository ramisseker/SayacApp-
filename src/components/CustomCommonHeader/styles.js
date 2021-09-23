import {calcWidth, fontSize} from '~utils';
import {fonts, globalStyle, sizes} from '../config';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    ...globalStyle.jcsa,
    paddingHorizontal: calcWidth(4),
    marginBottom: fontSize(20),
  },
  TopView: {
    ...globalStyle.jcsb,
    ...globalStyle.fdr,
    marginVertical: fontSize(10),
  },
  LeftView: {
    width: calcWidth(29),
    ...globalStyle.fdr,
    ...globalStyle.aic,
  },
  Svg: {width: fontSize(40), height: fontSize(43)},
  RightView: {
    ...globalStyle.fdr,
    width: calcWidth(63),
    ...globalStyle.jcfe,
  },
  BottomView: {
    ...globalStyle.jcsb,
    ...globalStyle.fdr,
    marginVertical: fontSize(15),
  },
});

export default styles;
