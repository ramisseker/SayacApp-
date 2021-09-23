import {calcWidth, calculate} from '~utils';
import {colors, fonts, globalStyle, lineHeights, sizes} from '../config';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Button: {
    ...globalStyle.asc,
    ...globalStyle.jccaic,
    width: calcWidth(92),
    height: calculate(48),
    borderRadius: calculate(100),
  },
  TrueButton: {
    borderWidth: 2.5,
    borderColor: colors.MainBlue,
    backgroundColor: colors.MainWhite,
  },
  FalseButton: {
    backgroundColor: colors.MainBlue,
  },
  Text: {
    ...fonts.Semibold,
    fontSize: sizes.h3,
    lineHeight: lineHeights.h5,
  },
  TrueText: {
    color: colors.MainBlue,
  },
  FalseText: {
    color: colors.MainWhite,
  },
});
export default styles;
