import {Button, Image, Text, TextInput, View} from 'react-native';
import {PropTypes, ViewPropTypes} from '~/components/config';
import React, {useState} from 'react';

import VectorImage from 'react-native-vector-image';
import {checkGray} from '~assets';
import moment from 'moment';
import styles from './styles';

const MeterReadInfoCard = props => {
  const {onPress, meterReadTime, meterValue, delayAmount, amount} = props;

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <VectorImage style={styles.svg} source={checkGray} />
        <Text style={styles.info}>Sayaç okundu</Text>
        <Text style={styles.meterReadTime}>
          {moment(meterReadTime).format('LLL')}
        </Text>
      </View>

      <View style={styles.lines}>
        <Text style={styles.info}>Değer:</Text>
        <Text style={styles.values}>{meterValue}</Text>
      </View>
      <View style={styles.lines}>
        <Text style={styles.info}>Gecikme:</Text>
        <Text style={styles.values}>{`${delayAmount} ₺`}</Text>
      </View>
      <View style={styles.lines}>
        <Text style={styles.info}>Tutar:</Text>
        <Text style={styles.values}>{amount + ' ₺'}</Text>
      </View>
    </View>
  );
};

MeterReadInfoCard.propTypes = {
  onPress: PropTypes.func,
  meterReadtime: PropTypes.string,
  meterValue: PropTypes.number,
};

MeterReadInfoCard.defaultProps = {
  onPress: () => console.log(),
  meterValue: 557865555,
  meterReadTime: '18 Ağustos 2021, 00.01',
  delayAmount: '0.00 ₺',
  amount: '48.20 ₺',
};

export {MeterReadInfoCard};
