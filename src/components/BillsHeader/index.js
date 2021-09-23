import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import VectorImage from 'react-native-vector-image';
import { PropTypes, ViewPropTypes } from '~/components/config';
import styles from './styles';
import { home_logo,home_filter} from '~assets';
import {StatusCard} from './../StatusCard'
import {CustomButtonWithSvg} from './../CustomButtonWithSvg';
const BillsHeader = (props) => {
    const {date, onPress} = props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <VectorImage style={styles.svg} source={home_logo} />
          <CustomButtonWithSvg
            onPress={onPress}
            svg={home_filter}
            text={date}
          />
        </View>
        <View style={styles.bottom}>
          <StatusCard status="Okunacak" number={1} />
          <StatusCard status="Ödenecek" number={2} />
          <StatusCard status="Tamamlandı" number={7} />
        </View>
      </View>
    );
};


BillsHeader.propTypes = {  
    date: PropTypes.string,  
  
};

BillsHeader.defaultProps = {
    date: 'Ağustos 2021',
   
};


export  {BillsHeader};





