import {colors, fonts, globalStyle, lineHeights, sizes} from '../config';

import React from 'react';
import {StyleSheet} from 'react-native';
import {fontSize} from '~utils';

const styles = StyleSheet.create({
  container: {
    width: '94%',
    height: '16%',
    borderRadius: fontSize(14),
    ...globalStyle.asc,
    padding: 10,
    flex: 1,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  top: {
    flexDirection: 'row',
    ...globalStyle.jcsb,
    ...globalStyle.fdr,
    paddingBottom: fontSize(8),
    alignItems: 'center',
  },
  bottom: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  svg: {
    width: fontSize(24),
    height: fontSize(24),
    marginHorizontal: 5,
  },
  svg1: {
    width: fontSize(15),
    height: fontSize(15),
    marginHorizontal: 5,
  },
  person: {
    fontSize: fontSize(14),
    color: colors.MainBlack,
    marginHorizontal: 5,
  },
  anText: {
    marginLeft: 'auto',
    fontSize: fontSize(14),
  },

  an: {
    color: colors.MainBlue,
    fontSize: fontSize(14),
    marginHorizontal: 5,
  },
  tc: {
    fontSize: fontSize(12),
    color: colors.MainDarkGray,
    marginHorizontal: 5,
  },
  date: {
    fontSize: fontSize(12),
    color: colors.MainDarkGray,
    marginHorizontal: 5,
  },
  status: {
    marginLeft: 'auto',
    fontSize: fontSize(12),
  },
});

export default styles;
