import {calcWidth, calculate, fontSize} from '~utils';
import {colors, globalStyle} from '~components';
import {fonts, lineHeights, sizes} from '~/components/config/';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.MainWhite,
    ...globalStyle.aic,
    ...globalStyle.jcc,
  },
  logo: {
    width: fontSize(200),
    height: fontSize(215),
    marginBottom: fontSize(30),
  },
  BinaryInput: {
    ...globalStyle.fdr,
    ...globalStyle.asc,
    ...globalStyle.jcsb,
    width: calcWidth(92),
  },
  line: {
    width: fontSize(140),
    height: fontSize(1.5),
    backgroundColor: colors.MainGray,
  },
  TextStyle: {
    marginHorizontal: fontSize(10),
    ...fonts.Semibold,
  },
  inputContainer: {width: calcWidth(43)},
  labelAndError: {width: calcWidth(50)},
  Button: {
    marginTop: fontSize(20),
    borderWidth: 2,
    borderColor: colors.MainBlue,
  },
  showPassword: {
    position: 'absolute',
    right: fontSize(30),
    top: fontSize(30),
    elevation: 100,
  },
});
export default styles;
