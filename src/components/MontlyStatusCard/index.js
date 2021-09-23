import {Animated, FlatList, Text, View} from 'react-native';
import {PropTypes, ViewPropTypes, colors} from '~/components/config';
import React, {useEffect, useState} from 'react';

import {Loader} from '~components';
import {MontsButton} from '../MontsButton';
import SQLite from 'react-native-sqlite-storage';
import {fontSize} from '~/utils';
import styles from './styles';

const MontlyStatusCard = props => {
  const {containerStyle, textStyle, navigation} = props;
  let db;
  const [items, setItems] = useState([]);
  const [isPressed, setIsPressed] = useState();
  let top = 0;
  let gec = 0;

  const [monthlyStatusData, setMontlyStatusData] = useState([]);
  const monts = [
    {title: 'Tümü', name: 'Tümü'},
    {title: 'Ocak', name: 'Ocak'},
    {title: 'Şubat', name: 'Şubat'},
    {title: 'Mart', name: 'Mart'},
    {title: 'Nisan', name: 'Nisan'},
    {title: 'Mayıs', name: 'Mayıs'},
    {title: 'Haziran', name: 'Haziran'},
    {title: 'Temmuz', name: 'Temmuz'},
    {title: 'Agustos', name: 'Agustos'},
    {title: 'Eylül', name: 'Eylül'},
    {title: 'Ekim', name: 'Ekim'},
    {title: 'Kasım', name: 'Kasım'},
    {title: 'Aralık', name: 'Aralık'},
  ];
  const bills = [
    {
      an: 1234656,
      month: 'Ocak',
      faturadurumu: 'Tamamlandı',
      tutar: 130,
    },
    {
      an: 127856,
      month: 'Şubat',
      faturadurumu: 'Ödenecek',
      tutar: 140,
    },
    {
      an: 1265656,
      month: 'Mart',
      faturadurumu: 'Ödenecek',
      tutar: 100,
    },
    {
      an: 1232356,
      month: 'Mart',
      faturadurumu: 'Tamamlandı',
      tutar: 100,
    },
    {
      an: 181356,
      month: 'Mart',
      faturadurumu: 'Okunacak',
      tutar: 80,
    },
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      SQLite.enablePromise(true);
      SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
        .then(dbRes => {
          db = dbRes;
          console.log('Database opened:', dbRes);
        })
        .catch(e => console.log(e));
      setTimeout(() => {
        readData();
      }, 500);
      setTimeout(() => {
        setIsPressed(0);
        filterData(0);
      }, 2000);
    });
    return unsubscribe;
  }, [navigation]);

  const readData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM bills', [], (tx, result) => {
        let temp = [];
        for (let index = 0; index < result.rows.length; index++) {
          temp.push(result.rows.item(index));
          setItems(temp);
        }
      });
    });
  };

  const filterData = filter => {
    if (filter === 0) setMontlyStatusData(items);
    else {
      setMontlyStatusData(items.filter(({ay}) => ay === `${filter}`));
    }
  };

  const TotalBills = Object.keys(items).length;

  // Paid BillsFeeTotal

  const paid = monthlyStatusData.filter(
    ({faturadurumu}) => faturadurumu === 'Tamamlandı',
  );

  const paidBills = Object.keys(paid).length;

  const paidPercent = Number(((paidBills / TotalBills) * 100).toFixed(2));

  const paidBillsFeeTotal = monthlyStatusData.reduce(
    (prev, cur) => prev + cur.tutar,
    0,
  );

  const hesapla = () => {
    items.map(item => {
      top = top + item.tutar;
      gec = gec + item.gecikmetutari;
    });
    console.log('top, gec top, gec');
    console.log(top, gec);
  };

  // Unpaid BillsFeeTotal

  const unpaid = monthlyStatusData.filter(
    ({faturadurumu}) => faturadurumu === 'Ödenecek',
  );

  const unpaidBills = Object.keys(unpaid).length;

  const unpaidPercent = Number(((unpaidBills / TotalBills) * 100).toFixed(2));

  const unpaidBillsFeeTotal = 100;

  // number of meter to be read

  const unread = monthlyStatusData.filter(
    ({faturadurumu}) => faturadurumu === 'Okunacak',
  );

  const unreadBills = Object.keys(unread).length;

  const unreadPercent = Number(((unreadBills / TotalBills) * 100).toFixed(2));

  return (
    <View>
      {hesapla()}
      <View
        style={{
          flexDirection: 'row',
          marginLeft: fontSize(15),
        }}>
        <FlatList
          renderItem={({item, index}) => (
            <MontsButton
              {...item}
              onPress={() => {
                setIsPressed(index);
                filterData(index);
                console.log(index);
              }}
              containerStyle={index === isPressed && styles.ButtonActive}
              textStyle={index === isPressed && styles.TextStyleActive}
            />
          )}
          data={monts}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={[styles.Container, containerStyle]}>
        <View>
          <Text style={[styles.TextStyle, textStyle]}>
            Fatura sayısı : {TotalBills}
          </Text>
          <View style={styles.Status}>
            <Text
              style={[
                styles.TextStyle,
                textStyle,
                {color: colors.MainDarkGray},
              ]}>
              Okunacak : {unreadBills}/{TotalBills}
            </Text>
            <View
              style={{
                height: fontSize(12),
                width: isNaN(unreadPercent) ? 0 : unreadPercent,
                backgroundColor: colors.MainDarkGray,
                borderRadius: fontSize(5),
              }}></View>
            <Text>{unreadPercent} %</Text>
          </View>
          <View style={styles.Status}>
            <Text
              style={[styles.TextStyle, textStyle, {color: colors.MainRed}]}>
              Ödenecek : {unpaidBills}/{TotalBills}
            </Text>
            <View
              style={{
                height: fontSize(12),
                width: isNaN(unpaidPercent) ? 0 : unpaidPercent,
                backgroundColor: colors.MainBeige,
                borderRadius: fontSize(5),
              }}></View>
            <Text>{unpaidPercent} %</Text>
          </View>
          <View style={styles.Status}>
            <Text
              style={[styles.TextStyle, textStyle, {color: colors.MainGreen}]}>
              Tamamlandı : {paidBills}/{TotalBills}
            </Text>
            <View
              style={{
                height: fontSize(12),
                width: isNaN(paidPercent) ? 0 : paidPercent,
                backgroundColor: colors.MainLightGreen,
                borderRadius: fontSize(5),
              }}></View>
            <Text>{paidPercent} %</Text>
          </View>
        </View>
        <View style={{paddingVertical: fontSize(30)}}>
          <Text style={[styles.TextStyle, textStyle]}>
            Ödenen miktar : {Number(top - gec).toFixed(2)} ₺
          </Text>
          <Text style={[styles.TextStyle, textStyle]}>
            Ödenen gecikme miktarı :{Number(gec).toFixed(2)}
          </Text>
          <Text style={[styles.TextStyle, textStyle, {color: colors.MainBlue}]}>
            Ödenen genel toplam : {Number(top).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};
MontlyStatusCard.propTypes = {
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};
MontlyStatusCard.defaultProps = {};

export {MontlyStatusCard};
