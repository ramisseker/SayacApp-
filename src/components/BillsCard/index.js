import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PropTypes, ViewPropTypes} from '~/components/config';
import {centerfocus, checkcircle, toberead} from '~assets';
import {colors, fonts, globalStyle, lineHeights, sizes} from '../config';
import {fontSize, navigate} from '~utils';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import {billStack} from '~config';
import moment from 'moment';
import styles from './styles';

//import styles from './styles';

const BillsCard = props => {
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
  const {
    id,
    containerStyle,
    aboneno,
    isimsoyisim,
    tcno,
    faturadurumu,
    ay,
    tutar,
    gecikmetutari,
  } = props;
  return (
    <TouchableOpacity
      onPress={() => navigate(billStack.bill_detail, {...props})}
      style={[
        styles.container,
        {
          backgroundColor:
            faturadurumu === 'Okunacak'
              ? colors.MainLightWhite
              : faturadurumu === 'Tamamlandı'
              ? colors.MainLightGreen
              : faturadurumu === 'Ödenecek'
              ? colors.MainBeige
              : null,
        },
      ]}>
      <View style={styles.top}>
        <VectorImage style={styles.svg} source={centerfocus} />
        <Text style={styles.person}>{isimsoyisim} </Text>
        <Text style={styles.anText}>An:</Text>
        <Text style={styles.an}>{aboneno}</Text>
      </View>
      <Text style={styles.tc}>{tcno}</Text>
      <View style={styles.bottom}>
        <Text style={styles.date}>{monthNames[ay - 1]}</Text>
        <Text
          style={[
            styles.status,
            {
              color:
                faturadurumu === 'Okunacak'
                  ? colors.MainLightBlue
                  : faturadurumu === 'Tamamlandı'
                  ? colors.MainGreen
                  : faturadurumu === 'Ödenecek'
                  ? colors.MainBrown
                  : null,
            },
          ]}>
          {faturadurumu}:{' '}
        </Text>
        {faturadurumu === 'Okunacak' ? (
          <VectorImage style={styles.svg1} source={toberead} />
        ) : faturadurumu === 'Tamamlandı' ? (
          <VectorImage style={styles.svg1} source={checkcircle} />
        ) : faturadurumu === 'Ödenecek' ? (
          <Text style={{color: colors.MainBrown, fontSize: fontSize(16)}}>
            {Number(tutar + gecikmetutari).toFixed(2)} ₺
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

BillsCard.propTypes = {
  onPress: PropTypes.func,
  ContainerStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  svg: PropTypes.number,
  textStyle: Text.propTypes.style,
  text: PropTypes.string,
};

BillsCard.defaultProps = {
  //onPress: () => console.log('BillsCard basıldı.'),
  price: 45,
};

export {BillsCard};
