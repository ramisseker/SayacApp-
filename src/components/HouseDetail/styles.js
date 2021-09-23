import { calcWidth, fontSize } from '~utils';
import { colors, fonts, globalStyle, sizes } from '../config';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.MainWhite,
  },
  CardContainer: {
    marginHorizontal: fontSize(27),
    marginTop: fontSize(10),
  },
  NameNoContainer: {
    ...globalStyle.fdr,
    ...globalStyle.jcsb,
    fontSize: fontSize(14),
  },
  Svg: {
    width: fontSize(18),
    height: fontSize(18),
    marginVertical: fontSize(4),
  },
  HouseName: {
    marginVertical: fontSize(4),
    marginRight: fontSize(130),
  },
  ContractSubsText: {
    marginVertical: fontSize(4),
  },
  SubsText: {
    marginVertical: fontSize(4),
    marginLeft: fontSize(147),
  },
  ContractSubsNo: {
    marginVertical: fontSize(4),
    color: colors.MainBlue,
  },
  TcSubsContainer: {
    ...globalStyle.fdr,
    ...globalStyle.jcsb,
  },
  tcAddressFirstVal: {
    fontSize: fontSize(12),
    color: colors.MainDarkGray,
    marginVertical: fontSize(8),
    marginRight: fontSize(40),
  },
  totalPay: {
    fontSize: fontSize(12),
    color: colors.MainBrown,
    marginVertical: fontSize(8),
    marginRight: fontSize(40),
  },
});

export default styles;