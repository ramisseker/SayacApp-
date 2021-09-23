import {CustomButton, Settings} from '~components';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {calculator, locked, printer} from '~assets';
import {home_logo, logout} from '~/assets';
import {navigate, replace} from '~utils';

import {CustomCommonHeader} from '~/components';
import SQLite from 'react-native-sqlite-storage';
import {SignOut} from '~/store/Actions/Auth/SignOut';
import {settingStack} from '~config';
import {useDispatch} from 'react-redux';

const SettingsScreen = ({navigation}) => {
  const [data, setData] = useState();
  let db;
  const dispatch = useDispatch();
  const logOut = async () => {
    dispatch(SignOut());
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      SQLite.enablePromise(true);
      SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
        .then(dbRes => {
          db = dbRes;
          readData();
        })
        .catch(e => console.log(e));
    });
    return unsubscribe;
  }, [navigation]);
  const readData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM billsSettings', [], (tx, result) => {
        setData(result.rows.item(0));
      });
    });
  };
  return (
    <View style={{flex: 1}}>
      <CustomCommonHeader svg={home_logo} activeBottom={false} />
      <Settings
        svg={calculator}
        text="Fatura değerleri"
        onPress={() => navigate(settingStack.bills_settings, {item: data})}
      />
      <Settings svg={locked} text="Kullanıcı seçenekleri" />
      <Settings
        svg={printer}
        text="Yazıcı ayarları"
        onPress={() => navigate(settingStack.printer_settings)}
      />
      <Settings svg={logout} text="Çıkış" onPress={logOut} />
    </View>
  );
};
export {SettingsScreen};
