import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import {
  CustomButton,
  CustomButtonWithSvg,
  CustomCommonHeader,
  HouseBillDetail,
  HouseDetail,
  SearchInput,
} from '~components';
import React, {useEffect, useState} from 'react';
import {arrow, delete_house, edit} from '~/assets';
import {fontSize, goBack, navigate, push} from '~utils';
import {homeStack, mainStack} from '~config';

import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import styles from './styles';

const HouseDetailScreen = ({route, navigation}) => {
  let item = route.params.item;
  let db;
  const [items, setItems] = useState([]);
  const [bills, setBills] = useState();
  const [filter, setFilter] = useState([]);
  const [read, setRead] = useState();
  const [pay, setPay] = useState();
  const [ok, setOk] = useState();
  const [delay, setDelay] = useState();
  const [total, setTotal] = useState();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      SQLite.enablePromise(true);
      SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
        .then(dbRes => {
          db = dbRes;
        })
        .catch(e => console.log(e));
      setTimeout(() => {
        readData();
        readDataBills();
      }, 1000);
    });
    return unsubscribe;
  }, [navigation]);



  const readData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM houses INNER JOIN bills on houses.id = bills.housesid WHERE bills.housesid = ?',
        [item.id],
        (tx, result) => {
          let bills = [];
          for (let index = 0; index < result.rows.length; index++) {
            bills.push(result.rows.item(index));
            setBills(bills);
          }
        },
      );
      tx.executeSql(
        'SELECT * FROM houses WHERE id = ?',
        [item.id],
        (tx, result) => {
          setItems(result.rows.item(0));
        }
      );
      tx.executeSql(
        'SELECT COUNT(faturadurumu) as count FROM houses INNER JOIN bills on houses.id = bills.housesid WHERE bills.housesid = ? AND faturadurumu="Okunacak";',
        [item.id],
        (tx, result) => {
          setRead(result.rows.item(0).count);
        },
      );
      tx.executeSql(
        'SELECT COUNT(faturadurumu) as count FROM houses INNER JOIN bills on houses.id = bills.housesid WHERE houses.id = ? AND faturadurumu="Ödenecek"',
        [item.id],
        (tx, result) => {
          setPay(result.rows.item(0).count);
        },
      );
      tx.executeSql(
        'SELECT COUNT(faturadurumu) as count FROM houses INNER JOIN bills on houses.id = bills.housesid WHERE bills.housesid = ? AND faturadurumu="Tamamlandı"',
        [item.id],
        (tx, result) => {
          setOk(result.rows.item(0).count);
        },
      );
    });
  };

  

  const deleteData = async id => {
    SQLite.enablePromise(true);
    const db = await SQLite.openDatabase({
      name: 'sayacdb.db',
      createFromLocation: 1,
    });
    db.transaction(tx => {
      tx.executeSql('DELETE FROM houses WHERE id = ?', [id], (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('Veri silindi');
        } else {
          console.log('Veri silme gerçekleştirilemedi');
        }
      });
    });
    db.transaction(tx => {
      tx.executeSql('DELETE FROM bills WHERE housesid = ?', [id], (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('Veri silindi');
        } else {
          console.log('Veri silme gerçekleştirilemedi');
        }
      });
    });
  };

  const readDataBills = async () => {
    db.transaction(tx => {
      tx.executeSql('SELECT sum(tutar) as tutar, sum(gecikmetutari) as gecikmetutari from bills where faturadurumu="Ödenecek" and housesid=?', [item.id], (tx, result) => {

        console.log("**********------------------------------------------------**********")
        console.log(result.rows.item(0));
        setTotal(result.rows.item(0).tutar);
        setDelay(result.rows.item(0).gecikmetutari);

      });
    });
  };


  const data = {
    cards: [
      {
        id: 0,
        status: 'Hepsi',
        quantity: read + pay + ok,
        onPress: () => filterStatus('Hepsi')
      },
      {
        id: 1,
        status: 'Okunacak',
        quantity: read,
        onPress: () => filterStatus('Okunacak')
      },
      {
        id: 2,
        status: 'Ödenecek',
        quantity: pay,
        onPress: () => filterStatus('Ödenecek')
      },
      {
        id: 3,
        status: 'Tamamlandı',
        quantity: ok,
        onPress: () => filterStatus('Tamamlandı')
      },
    ],
  };
  
  const filterStatus = (status) => {
    if (status == "Hepsi") {
      setFilter(bills)
    } else {
      setFilter(
        bills.filter(function (item) {

          return item.faturadurumu.includes(`${status}`);
        })
      );
    }
  };

  return (
    <View style={styles.Container}>
      <CustomCommonHeader
        data={data.cards}
        backButton={
          <TouchableOpacity onPress={() => goBack()}>
            <VectorImage source={arrow} />
          </TouchableOpacity>
        }
        activeBottom={true}
        leftButton={
          <CustomButtonWithSvg
            containerStyle={{
              marginRight: fontSize(10),
            }}
            onPress={() => {
              deleteData(item.id);
              push(mainStack.home_tab);
            }}
            svg={delete_house}
            text={'Haneyi Sil'}
          />
        }
        rightButton={
          <CustomButtonWithSvg
            onPress={() =>
              navigate(homeStack.update_house, {
                items: items,
              })
            }
            svg={edit}
            text={'Düzenle'}
          />
        }
      />
      

      <HouseDetail {...items} tutar={total > 0 ? total : total === 0 ? total : 0} gecikmetutari={delay ? delay : 0} />


      <FlatList
        renderItem={({ item }) => <HouseBillDetail {...item} {...bills} value={item.tutar + item.gecikmetutari} />}
        data={filter && filter.length > 0 ? filter : bills}
        keyExtractor={(item, index) => item.id}
      />
      
    </View>
  );
};
export {HouseDetailScreen};
