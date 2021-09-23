import { Button, Image, Text, TextInput, View } from 'react-native';
import { PropTypes, ViewPropTypes, colors } from '~/components/config';
import React,{useState} from 'react';

import VectorImage from 'react-native-vector-image';
import { checkGray } from '~assets';
import styles from './styles';

const MeterPaidInfoCard = (props) => {
    const { onPress, meterReadTime, meterValue, delayAmount, amount} = props;
   
   
    return (
      <View style={styles.container}>
        <View style={styles.bottom}>
          <VectorImage style={styles.svg} source={checkGray} />
          <Text style={styles.info}>Ödeme Alındı</Text>
          <Text style={styles.meterReadTime}>{meterReadTime}</Text>
        </View>

        <View style={styles.lines}>
          <Text style={styles.info}>Alınan:</Text>
          <Text style={styles.values}>{`${amount} ₺`}</Text>
        </View>
        <View style={styles.lines}>
          <Text style={(styles.info, {color: colors.MainBlue})}>
            Tamamlandı
          </Text>
        </View>
      </View>
    );
};


MeterPaidInfoCard.propTypes = {
    onPress: PropTypes.func,
    meterReadtime: PropTypes.string,
    meterValue: PropTypes.number,
  
};

MeterPaidInfoCard.defaultProps = {
    onPress: () => console.log(),
    meterValue: 557865555,
    meterReadTime:'18 Ağustos 2021, 00.01',
    delayAmount: '0.00 ₺',
    amount:'48.20 ₺'
};


export  {MeterPaidInfoCard};




