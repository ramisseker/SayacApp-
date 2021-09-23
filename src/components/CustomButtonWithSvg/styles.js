import {colors, globalStyle} from '../config';
import {StyleSheet} from 'react-native';
import {fontSize} from '~utils';
const styles = StyleSheet.create({
  Container: {
    ...globalStyle.fdr,
    ...globalStyle.asc,
    ...globalStyle.jccaic,
    backgroundColor: colors.MainLightWhite,
    paddingHorizontal: fontSize(11),
    height: fontSize(33),
    borderRadius: fontSize(20),
  },
  Svg: {width: fontSize(23), height: fontSize(23)},
  Text: {paddingLeft: fontSize(5), fontSize: fontSize(13)},
});
export default styles;
