import {colors, globalStyle} from '../config';
import {StyleSheet} from 'react-native';
import {calculate, calcWidth, fontSize} from '~utils';
export default StyleSheet.create({
  container: {
    width: '100%',

    ...globalStyle.asc,
    padding: 15,

    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 6,
    // },
    // shadowOpacity: 0.39,
    // shadowRadius: 1,

    // elevation: 4,
  },
  top: {
    flexDirection: 'row',
    ...globalStyle.jcsb,
    ...globalStyle.fdr,
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  bottom: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    justifyContent: 'space-around',
  },
  svg: {
    width: fontSize(40),
    height: fontSize(43),
    marginHorizontal: 5,
  },
});
