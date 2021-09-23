import {PropTypes, ViewPropTypes} from '~/components/config';
import {Text, TouchableOpacity, View} from 'react-native';
import {checkcircle, toberead} from '~assets';
import {colors, fonts, globalStyle, lineHeights, sizes} from '../config';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import {fontSize} from '~utils';
import styles from './styles';

const StatusCard = props => {
  const {onPress, status, price} = props;
  const vectorimage = () => {
    return status === 'Okunacak' ? (
      <VectorImage style={styles.svg} source={toberead} />
    ) : status === 'Tamamlandı' ? (
      <VectorImage style={styles.svg} source={checkcircle} />
    ) : status === 'Ödenecek' ? (
      <Text
        style={{
          color: colors.MainBrown,
          fontSize: fontSize(12),
          ...fonts.Semibold,
        }}>
        {Number(price).toFixed(2)} ₺
      </Text>
    ) : null;
  };
  const showprice = () => {
    return (
      <Text
        style={{
          color: colors.MainBrown,
          fontSize: fontSize(12),
          ...fonts.Semibold,
        }}>
        {price}
      </Text>
    );
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor:
            status === 'Okunacak'
              ? colors.MainLightWhite
              : status === 'Tamamlandı'
              ? colors.MainLightGreen
              : status === 'Ödenecek'
              ? colors.MainBeige
              : null,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color:
              status === 'Okunacak'
                ? colors.MainLightBlue
                : status === 'Tamamlandı'
                ? colors.MainGreen
                : status === 'Ödenecek'
                ? colors.MainBrown
                : null,
          },
        ]}>
        {status}
      </Text>
      {vectorimage()}
    </TouchableOpacity>
  );
};

StatusCard.propTypes = {
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  svg: PropTypes.number,
  textStyle: Text.propTypes.style,
  text: PropTypes.string,
};
StatusCard.defaultProps = {
  onPress: () => console.log('StatusCard basıldı.'),
  price: null,
};
export {StatusCard};
