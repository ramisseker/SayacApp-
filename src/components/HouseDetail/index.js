import {PropTypes, ViewPropTypes} from '~/components/config';
import {Text, View} from 'react-native';

import React from 'react';
import {StatusHeader} from '../StatusHeader';
import VectorImage from 'react-native-vector-image';
import {fontSize} from '~/utils';
import {home} from '~/assets';
import styles from './styles';

const HouseDetail = props => {
  
  const {
    svg,
    aboneno,
    isimsoyisim,
    mahalle,
    cadde,
    sokak,
    sayacno,
    tcno,
    ilksayacdeg,
    tutar,
    gecikmetutari,
    totalPay,
  } = props;

  return (
    <View style={styles.Container}>
      <View style={styles.CardContainer}>
        <View style={styles.NameNoContainer}>
          <VectorImage source={svg} style={styles.Svg} />
          <Text style={[styles.HouseName]}>{isimsoyisim}</Text>
          <Text style={styles.ContractSubsText}>Sn:</Text>
          <Text style={styles.ContractSubsNo}>{sayacno}</Text>
        </View>
        <View style={styles.TcSubsContainer}>
          <Text style={styles.tcAddressFirstVal}>{tcno}</Text>
          <Text style={styles.SubsText}>An:</Text>
          <Text style={styles.ContractSubsNo}>{aboneno}</Text>
        </View>
        <Text
          style={
            styles.tcAddressFirstVal
          }>{`${mahalle} ${cadde} ${sokak}`}</Text>
        <Text style={styles.tcAddressFirstVal}>
          {`Sayaç başlangıç değeri: ${ilksayacdeg}`}
        </Text>
        <Text style={styles.totalPay}>
          {`Toplam ödenecek: ${tutar} + ${gecikmetutari} (gecikme) = ${tutar + gecikmetutari} ₺`}
        </Text>
      </View>
    </View>
  );
};

HouseDetail.propTypes = {
  svg: PropTypes.number,
  houseName: PropTypes.string,
  contractNo: PropTypes.string,
  tcNo: PropTypes.string,
  subsNo: PropTypes.string,
  address: PropTypes.string,
  tutar: PropTypes.number,
  totalPay: PropTypes.string,
};

HouseDetail.defaultProps = {
  svg: home,
  houseName: 'Mehmet ÖZKAN',
  contractNo: '0160018',
  tcNo: '12345678912',
  subsNo: '0546618',
  address: 'Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12',
  cntFirstVal: 'Sayaç başlangıç değeri: 373127',
  totalPay: 'Toplam ödenecek: 55 + 2 (gecikme) = 57 ₺',
};

export {HouseDetail};

//₺
