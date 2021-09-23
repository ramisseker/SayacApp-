import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {PropTypes, ViewPropTypes} from '~/components/config';
import styles from './styles';
import {colors} from '../config';

const StatusBadge = props => {
  const {active, onPress, containerStyle, status, quantity, textStyle} = props;

  const background = {
    backgroundColor:
      status === 'Okunacak'
        ? colors.MainLightWhite
        : status === 'Tamamlandı'
          ? colors.MainLightGreen
          : status === 'Ödenecek'
            ? colors.MainBeige
            : status === 'Hepsi'
              ? colors.MainLightWhite
              : null
  };

  const textcolor = {
    color:
      status === 'Okunacak'
        ? colors.MainLightBlue
        : status === 'Tamamlandı'
          ? colors.MainGreen
          : status === 'Ödenecek'
            ? colors.MainBrown
            : status === 'Hepsi'
              ? colors.MainDarkGray
              : null
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!active}
      style={[styles.Container, containerStyle, {...background}]}>
      <Text style={[styles.TextStyle, textStyle, {...textcolor}]}>
        {status + '    ' + quantity}
      </Text>
    </TouchableOpacity>
  );
};

StatusBadge.propTypes = {
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  background: ViewPropTypes.style,
  active: PropTypes.bool,
  status: PropTypes.string,
  quantity: PropTypes.number,
  textStyle: Text.propTypes.style,
};
StatusBadge.defaultProps = {
  onPress: () => console.log('StatusBadge basıldı.'),
  active: false,
  status: 'bilinmiyor',
  quantity: 0,
};

export { StatusBadge };