import {colors, fonts, globalStyle, sizes} from '../config';
import {StyleSheet} from 'react-native';
import {calcWidth} from '~utils';
const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  InputContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 3,
    borderRadius: 100,
    ...globalStyle.asc,
    ...globalStyle.inputContainerStyle,
    backgroundColor: colors.MainWhite,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.Water,
    width: calcWidth(92),
    ...globalStyle.shadow1,
  },
  Input: {
    paddingLeft: 15,
    borderRadius: 10,
    ...globalStyle.asc,
    ...globalStyle.textInputStyle,
    borderRadius: 100,
    backgroundColor: colors.MainWhite,
    color: colors.MainBlack,
    fontSize: sizes.h6,
  },
  Label: {
    width: calcWidth(100),
    ...globalStyle.asc,
    fontWeight: 'normal',
    color: colors.MainBlack,
    ...fonts.Semibold,
    fontSize: sizes.base,
    paddingLeft: calcWidth(8),
  },
  Error: {
    width: calcWidth(100),
    ...globalStyle.asc,
    fontSize: sizes.h7,
    ...fonts.Semibold,
    color: colors.MainRed,
    marginBottom: 15,
    paddingLeft: calcWidth(8),
  },
});
export default styles;