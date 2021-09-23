import {BillsCard, BillsDetailCard, BillsHeader} from '~components';
import {
  CustomButtonWithSvg,
  CustomCommonHeader,
  HouseBillDetail,
  HouseDetail,
} from '~components';
import {FlatList, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchInput, StatusHeader} from '~components';
import {arrow_right, home_add, home_filter, home_logo} from '~assets';
import {fontSize, navigate} from '~utils';

import SQLite from 'react-native-sqlite-storage';
import {billStack} from '~config';
import moment from 'moment';

const BillsScreen = ({navigation}) => {
  let generalDate = new Date();
  let miliSeconds = generalDate.setHours(generalDate.getHours());
  let minDate = new Date(miliSeconds);
  let db;
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([]);
  const [read, setRead] = useState();
  const [pay, setPay] = useState();
  const [ok, setOk] = useState();
  const [bills, setBills] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      SQLite.enablePromise(true);
      SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
        .then(dbRes => {
          db = dbRes;
        })
        .catch(e => console.log(e));
      newSetData();
      setTimeout(() => {
        readData();
      }, 1000);
    });
    return unsubscribe;
  }, [navigation]);

  console.log('items[0]');
  console.log(items[0]);
  const readData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM houses INNER JOIN bills ON houses.id = bills.housesid',
        //'SELECT * FROM bills;',
        [],
        (tx, result) => {
          let temp = [];
          console.log('result', result);
          for (let index = 0; index < result.rows.length; index++) {
            temp.push(result.rows.item(index));
            setItems(temp);
          }
        },
      );
      tx.executeSql('SELECT * FROM billsSettings;', [], (tx, result) => {
        setBills(result.rows.item(0));
      });
      tx.executeSql(
        'SELECT COUNT(faturadurumu) as count FROM bills WHERE faturadurumu="Okunacak"',
        [],
        (tx, result) => {
          setRead(result.rows.item(0).count);
        },
      );
      tx.executeSql(
        'SELECT COUNT(faturadurumu) as count FROM bills WHERE faturadurumu="Ödenecek"',
        [],
        (tx, result) => {
          setPay(result.rows.item(0).count);
        },
      );
      tx.executeSql(
        'SELECT COUNT(faturadurumu) as count FROM bills WHERE faturadurumu="Tamamlandı"',
        [],
        (tx, result) => {
          setOk(result.rows.item(0).count);
        },
      );
    });
  };

  // const setData = async () => {
  //   SQLite.enablePromise(true);
  //   const db = await SQLite.openDatabase({
  //     name: 'sayacdb.db',
  //     createFromLocation: 1,
  //   });
  //   console.log(db);
  //   db.transaction(tx => {
  //     tx.executeSql('SELECT * FROM houses;', [], (tx, result) => {
  //       for (let index = 0; index < result.rows.length; index++) {
  //         tx.executeSql(
  //           'INSERT INTO bills (faturadurumu, tutar, ay, odemetarihi, okundugutarihi, okunandeg, oncekisayacdeg, sayacokumatarihi, gecikmetutari, housesid) VALUES  (?,?,?,?,?,?,?,?,?,?)',
  //           [
  //             'Okunacak',
  //             '',
  //             `${moment(minDate).month() + 1}`,
  //             '',
  //             '',
  //             '',
  //             'bidursun',
  //             `${moment(minDate).format('DD-MM-YYYY HH:mm')}`,
  //             '',
  //             `${result.rows.item(index).id}`,
  //           ],
  //           (tx, result) => {
  //             console.log('tx', tx);
  //             console.log('result', result);
  //           },
  //         );
  //       }
  //     });
  //   });
  // };

  const newSetData = async () => {
    SQLite.enablePromise(true);
    const db = await SQLite.openDatabase({
      name: 'sayacdb.db',
      createFromLocation: 1,
    });
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM houses;', [], (tx, result) => {
        for (let index = 0; index < result.rows.length; index++) {
          tx.executeSql(
            'INSERT INTO bills (faturadurumu, tutar, ay, odemetarihi, okundugutarihi, okunandeg, oncekisayacdeg, sayacokumatarihi, gecikmetutari, housesid) SELECT ?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS (SELECT * FROM bills WHERE ay = ? AND housesid = ?)',
            [
              'Okunacak',
              '',
              `${moment(minDate).month() + 1}`,
              '',
              '',
              '',
              `${result.rows.item(index).ilksayacdeg}`,
              `${miliSeconds}`,
              '',
              `${result.rows.item(index).id}`,
              `${moment(minDate).month() + 1}`,
              `${result.rows.item(index).id}`,
            ],
            (tx, result) => {},
          );
        }
      });
    });
  };

  const filterStatus = status => {
    if (status == 'Hepsi') {
      setFilter(items);
    } else {
      setFilter(
        items.filter(function (item) {
          return item.faturadurumu.includes(`${status}`);
        }),
      );
    }
  };

  const searchFilter = text => {
    const searchingData = items.filter(item => {
      const filtered = `${item.isimsoyisim} ${item.aboneno}`;
      return filtered.indexOf(text.toLowerCase()) > -1;
    });
    setFilter(searchingData);
  };
  const data = {
    cards: [
      {
        id: 0,
        status: 'Hepsi',
        quantity: read + pay + ok,
        onPress: () => filterStatus('Hepsi'),
      },
      {
        id: 1,
        status: 'Okunacak',
        quantity: read,
        onPress: () => filterStatus('Okunacak'),
      },
      {
        id: 2,
        status: 'Ödenecek',
        quantity: pay,
        onPress: () => filterStatus('Ödenecek'),
      },
      {
        id: 3,
        status: 'Tamamlandı',
        quantity: ok,
        onPress: () => filterStatus('Tamamlandı'),
      },
    ],
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CustomCommonHeader
        svg={home_logo}
        data={data.cards}
        activeBottom={true}
        // leftButton={
        //   <CustomButtonWithSvg
        //     containerStyle={{
        //       marginRight: fontSize(10),
        //     }}
        //     onPress={() => newSetData()}
        //     svg={home_filter}
        //     text={'Oluştur'}
        //   />
        // }
        rightButton={
          <CustomButtonWithSvg
            containerStyle={{
              marginRight: fontSize(10),
            }}
            onPress={() => console.log('Filter Basıldı.')}
            svg={home_filter}
            text={'Ağustos 2021'}
          />
        }
      />
      <View style={{marginHorizontal: 16}}>
        <SearchInput
          placeholder={'İsim ve abone no'}
          onChange={val => searchFilter(val)}
        />
      </View>
      <FlatList
        renderItem={({item}) => <BillsCard {...bills} {...item} />}
        data={filter && filter.length > 0 ? filter : items}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export {BillsScreen};
