import {calcWidth, calculate, fontSize} from '~utils';
import {colors, fonts, globalStyle} from '../config';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    ...globalStyle.asc,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  svg: {
    width: fontSize(20),
    height: fontSize(20),
    marginHorizontal: 5,
  },

  info: {
    fontSize: fontSize(12),
    ...fonts.Semibold,
    color: colors.MainBlack,
  },
  meterReadTime: {
    ...fonts.Semibold,
    marginLeft: 'auto',
    color: colors.MainBlue,
    fontSize: fontSize(12),
    marginHorizontal: 5,
  },
  lines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 30,
  },
  values: {
    marginLeft: 'auto',
    ...fonts.Semibold,
    color: colors.MainBlue,
    fontSize: fontSize(12),
    marginHorizontal: 5,
  },
});
