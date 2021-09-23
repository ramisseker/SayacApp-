import {CustomButtonWithSvg, CustomCommonHeader} from '~components';
import {FlatList, Text, View} from 'react-native';
import {HouseCard, Loader, SearchInput} from '~components';
import React, {useEffect, useState} from 'react';
import {fontSize, navigate} from '~utils';
import {home_add, home_filter, home_logo} from '~assets';

import SQLite from 'react-native-sqlite-storage';
import {homeStack} from '~config';

const HousesScreen = ({navigation}) => {
  let db;
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }, 500);
    });
    return unsubscribe;
  }, [navigation]);
  const searchFilter = text => {
    const searchingData = items.filter(item => {
      const filtered = `${item.isimsoyisim} ${item.tcno} ${item.aboneno}`;
      return filtered.indexOf(text.toLowerCase()) > -1;
    });
    setFilter(searchingData);
  };
  const readData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM houses', [], (tx, result) => {
        let temp = [];
        for (let index = 0; index < result.rows.length; index++) {
          temp.push(result.rows.item(index));
          setItems(temp);
        }
      });
    });
  };

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <Loader loading={loading} />
      <CustomCommonHeader
        svg={home_logo}
        activeBottom={false}
        // leftButton={
        //   <CustomButtonWithSvg
        //     containerStyle={{
        //       marginRight: fontSize(10),
        //     }}
        //     onPress={() => navigate(homeStack.add_house)}
        //     svg={home_filter}
        //     text={'Filtrele(sankigereksiz)'}
        //   />
        // }
        rightButton={
          <CustomButtonWithSvg
            onPress={() => navigate(homeStack.add_house)}
            svg={home_add}
            text={'Hane Ekle'}
          />
        }
      />
      <View style={{marginHorizontal: 16}}>
        <SearchInput onChange={val => searchFilter(val)} />
      </View>
      <FlatList
        renderItem={({item}) => (
          <HouseCard
            {...item}
            navigation={navigation}
            onPress={() =>
              navigate(homeStack.house_detail, {
                item: item,
              })
            }
          />
        )}
        data={filter && filter.length > 0 ? filter : items}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export {HousesScreen};
