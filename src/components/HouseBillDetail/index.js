import {PropTypes, ViewPropTypes} from '~/components/config';
import {Text, TouchableOpacity, View} from 'react-native';
import {bill_detail_icon, done_icon, read_icon} from '~assets';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import {colors} from '../config';
import styles from './styles';

import { navigate } from '~/utils';
import { billStack, homeTabs } from '~/config';

const HouseBillDetail = props => {
  const { containerStyle, svg, ay, year, faturadurumu, value, svg2, svg3, id } = props;
  
  const monthNames = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
  
  const background = {
    backgroundColor:
      faturadurumu === 'Okunacak'
        ? colors.MainLightWhite
        : faturadurumu === 'Tamamlandı'
        ? colors.MainLightGreen
        : faturadurumu === 'Ödenecek'
        ? colors.MainBeige
        : null,
  };

  const textcolor = {
    color:
      faturadurumu === 'Okunacak'
        ? colors.MainLightBlue
        : faturadurumu === 'Tamamlandı'
        ? colors.MainGreen
        : faturadurumu === 'Ödenecek'
        ? colors.MainBrown
        : null,
  };

  const valueText = {
    display:
      faturadurumu === 'Okunacak' ? 'none' : faturadurumu === 'Tamamlandı' ? 'none' : null,
  };

  const read_icon = {
    display:
      faturadurumu === 'Ödenecek' ? 'none' : faturadurumu === 'Tamamlandı' ? 'none' : null,
  };

  const done_icon = {
    display:
      faturadurumu === 'Okunacak' ? 'none' : faturadurumu === 'Ödenecek' ? 'none' : null,
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={[styles.Bill, containerStyle, { ...background }]}
        onPress={() => navigate(homeTabs.bill_stack, { screen: billStack.bill_detail, params: { id } })}>
        <View style={styles.Time}>
          <VectorImage source={svg} style={styles.Svg} />
          <Text style={styles.TimeText}>{monthNames[ay - 1]}</Text>
          <Text style={styles.TimeText}>{year}</Text>
        </View>
        <View style={styles.Time}>
          <Text style={[{...textcolor}, styles.Status]}>{faturadurumu}</Text>
          <Text style={[{...valueText}, styles.Value]}>{value} ₺</Text>
          <VectorImage style={{...read_icon}} source={svg2} />
          <VectorImage style={{...done_icon}} source={svg3} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

HouseBillDetail.propTypes = {
    containerStyle: ViewPropTypes.style,
    background: ViewPropTypes.style,
    textcolor: ViewPropTypes.style,
    svg: PropTypes.number,
    ay: PropTypes.string,
    year: PropTypes.string,
    faturadurumu: PropTypes.string,
  value: PropTypes.number,
    svg2: PropTypes.number,
    svg3: PropTypes.number,
    valueText: ViewPropTypes.style,
    read_icon: ViewPropTypes.style,
    done_icon: ViewPropTypes.style,
};

HouseBillDetail.defaultProps = {
  svg: bill_detail_icon,
  svg2: read_icon,
  svg3: done_icon,
};

export {HouseBillDetail};
