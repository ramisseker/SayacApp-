import {PropTypes, ViewPropTypes} from '~/components/config';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, globalStyle} from '../config';

import SQLite from 'react-native-sqlite-storage';
import {StatusBadge} from '~/components';
import VectorImage from 'react-native-vector-image';
import {fontSize} from '~utils';
import {home} from '~assets';
import styles from './styles';

const HouseCard = props => {
  let db;
  const {
    data,
    id,
    containerStyle,
    svgStyle,
    aboneno,
    isimsoyisim,
    mahalle,
    cadde,
    sokak,
    tcno,
    svg,
    onPress,
  } = props;
  const [read, setRead] = useState();
  const [pay, setPay] = useState();
  useEffect(() => {
    SQLite.enablePromise(true);
    SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
      .then(dbRes => {
        db = dbRes;
      })
      .catch(e => console.log(e));
    setTimeout(() => {
      readData();
    }, 500);
  });
  const readData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT COUNT(faturadurumu) as count FROM houses INNER JOIN bills on houses.id = bills.housesid WHERE bills.housesid = ? AND faturadurumu="Okunacak";',
        [id],
        (tx, result) => {
          setRead(result.rows.item(0).count);
        },
      );
      tx.executeSql(
        'SELECT COUNT(faturadurumu) as count FROM houses INNER JOIN bills on houses.id = bills.housesid WHERE houses.id = ? AND faturadurumu="Ödenecek"',
        [id],
        (tx, result) => {
          setPay(result.rows.item(0).count);
        },
      );
    });
  };

  const dataOne = {
    status: 'Ödenecek',
    quantity: pay,
  };

  const dataTwo = {
    status: 'Okunacak',
    quantity: read,
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.Container, containerStyle]}>
        <View style={styles.NameContainer}>
          <View style={{flexDirection: 'row'}}>
            <VectorImage style={[styles.Svg, svgStyle]} source={svg} />
            <Text style={styles.TextNameStyle}>{isimsoyisim}</Text>
          </View>
          <View style={styles.AnContainer}>
            <Text style={styles.AnText}>
              An:
              <Text style={styles.AnIdText}>{' ' + aboneno}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.AdressContainer}>
          <Text style={styles.TextMeterStyle}>{tcno}</Text>
          <Text style={styles.TextAddressStyle}>
            {`${mahalle} ${cadde} ${sokak}`}
          </Text>
        </View>
        <View style={styles.badgeContainer}>
          {pay ? (
            <View style={{paddingHorizontal: fontSize(10)}}>
              <StatusBadge {...dataOne} status={'Ödenecek'} />
            </View>
          ) : null}
          {read ? (
            <View style={{paddingHorizontal: fontSize(10)}}>
              <StatusBadge {...dataTwo} status={'Okunacak'} />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

HouseCard.propTypes = {
  containerStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  an: PropTypes.number,
  name: PropTypes.string,
  meter: PropTypes.number,
  address: PropTypes.string,
  svg: PropTypes.number,
  onPress: PropTypes.func,
};
HouseCard.defaultProps = {
  svg: home,
  an: 1234567,
  name: 'Ahmet Mehmet',
  meter: 123456789,
  address: 'Aşağı Mah. Ata Cd. Kavuncu Sk. No: 12',
  svg: home,
  onPress: () => console.log('Hanedetay basıldı.'),
};

export {HouseCard};
