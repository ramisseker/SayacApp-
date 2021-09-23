// globalStyle system
import {StyleSheet} from 'react-native';
import {calculate, calcWidth} from '~utils';
const globalStyle = StyleSheet.create({
  posRel: {
    position: 'relative',
  },
  posAbs: {
    position: 'absolute',
  },
  aife: {
    alignItems: 'flex-end',
  },
  aic: {
    alignItems: 'center',
  },
  aifs: {
    alignItems: 'flex-start',
  },
  jcfe: {
    justifyContent: 'flex-end',
  },
  jcc: {
    justifyContent: 'center',
  },
  jcfs: {
    justifyContent: 'flex-start',
  },
  jcsb: {
    justifyContent: 'space-between',
  },
  jcsa: {
    justifyContent: 'space-around',
  },
  jcse: {
    justifyContent: 'space-evenly',
  },
  jcfsaifs: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  jccaic: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  jcfeaife: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textCc: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  tac: {textAlign: 'center'},
  fdr: {
    flexDirection: 'row',
  },
  fdc: {
    flexDirection: 'column',
  },
  fdcr: {
    flexDirection: 'column-reverse',
  },
  fdrc: {
    flexDirection: 'row-reverse',
  },
  asfs: {
    alignSelf: 'flex-start',
  },
  asc: {
    alignSelf: 'center',
  },
  asfe: {
    alignSelf: 'flex-end',
  },
  zi0: {
    zIndex: 0,
  },
  zi1: {
    zIndex: 1,
  },
  zi2: {
    zIndex: 2,
  },
  zi3: {
    zIndex: 3,
  },
  inputContainerStyle: {width: calcWidth(88), height: calculate(52)},
  textInputStyle: {width: calcWidth(88), height: calculate(46)},
  shadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  shadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.57,
    shadowRadius: 5.19,
    elevation: 10,
  },
});
export {globalStyle};
