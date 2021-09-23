import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import SQLite from 'react-native-sqlite-storage';

//! veritabanı açar
const db = SQLite.openDatabase(
  {
    name: 'sayacdb',
    createFromLocation: 3,
  },
  () => {
    console.log('başarılı');
  },
  error => {
    console.log(error);
  },
);
//! houses tablosuna veri ekler
const createData = () => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO houses (isimsoyisim, tcno, mahalle, cadde, sokak, sayacno, ilksayacdeg, aboneno, notlar, faturaid, odenenfaturasayisi, faturasayisi) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [
        name,
        tcno,
        neighbourhood,
        street,
        doornumber,
        counternumber,
        initialcountervalue,
        subscriberno,
        notes,
      ],
      (tx, result) => {
        console.log('tx', tx);
        console.log('result', result);
      },
    );
  });
};
/*
//! kullanılan parametreler
const [name, setName] = useState('');
const [subsNo, setSubsNo] = useState('');
const [adr, setAdr] = useState('');
const [items, setItems] = useState([]);
const [newSubsNo, setNewSubsNo] = useState('');

//! id,isim,abone no ve adres sütünlarından oluşan houses isimli bir tablo açar
useEffect(() => {
    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS houses (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name Text, SubsNo INTEGER, Adr Text)", [], (tx, result) => {
            console.log('tx', tx)
            console.log('result', result)
            console.log("açıldı");
        })
    })
}, [])



//! houses tablosundaki tüm verileri okur
export const readData = () => {
    db.transaction((tx) => {
        tx.executeSql("SELECT * FROM houses", [], (tx, result) => {
            var temp = [];
            console.log('result', result)
            for (let index = 0; index < result.rows.length; index++) {
                temp.push(result.rows.item(index));
                console.log(result.rows.item(index));
                setItems(temp);
            }
        })
    })
};

//! houses tablosundan SubsNo(abone no) ile veriyi siler
export const deleteData = () => {
    db.transaction((tx) => {
        tx.executeSql("DELETE FROM houses WHERE SubsNo = ?", [subsNo], (tx, result) => {
            console.log('silindi');
            console.log(result.rows.item(index));

        })
    })
};

//! houses tablosundan subsno ile veri günceller
export const updateData = async () => {
    if (name.length == 0) {
        Alert.alert('Warning!', 'Please write your data.')
    } else {
        try {
            // var user = {
            //     Name: name
            // }
            // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
            db.transaction((tx) => {
                tx.executeSql(
                    "UPDATE houses SET Name = ?, SubsNo = ?, Adr = ? WHERE SubsNo = ?",
                    [name, subsNo, adr, newSubsNo],
                    () => { Alert.alert('Success!', 'Your data has been updated.') },
                    error => { console.log(error) }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
}

//! flatlist veri ayırmak için stil
export const listViewItemSeparator = () => {
    return (

        <View
            style={{
                height: 1,
                width: '100%',
                backgroundColor: '#000'
            }}
        />
    );
};

//! örnek kullanım
/*
<>

    <View>

        <View>
            <TextInput
                placeholder={'isim'}
                onChangeText={(text) => setName(text)}
                value={name}
            >
            </TextInput>
            <TextInput placeholder={'abone no'}
                onChangeText={(text) => setSubsNo(text)}
                value={subsNo}
            >
            </TextInput>
            <TextInput placeholder={'adres'}
                onChangeText={(text) => setAdr(text)}
                value={adr}
            >
            </TextInput>
            <Button
                title={'Ekle'}
                onPress={createData}></Button>

            <Button
                title={'Oku'}
                onPress={readData}></Button>
        </View>

        <SafeAreaView >
            <FlatList
                data={items}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View key={item.ID} style={{ padding: 20 }}>

                        <Text > İsim: {item.Name} </Text>
                        <Text > Abone No: {item.SubsNo} </Text>
                        <Text > Adres: {item.Adr} </Text>



                    </View>
                }
            />
        </SafeAreaView>
        <View>
            <TextInput
                placeholder={'Silinecek abone no'}
                onChangeText={(subsNo) => setSubsNo(subsNo)}></TextInput>

            <Button title={'sil'}
                onPress={deleteData}></Button>
        </View>

        <View>
            <TextInput
                placeholder={'Güncellenecek abone no'}
                onChangeText={(newSubsNo) => setNewSubsNo(newSubsNo)}></TextInput>
            <TextInput
                placeholder={'isim'}
                onChangeText={(text) => setName(text)}
                value={name}
            >
            </TextInput>
            <TextInput placeholder={'abone no'}
                onChangeText={(text) => setSubsNo(text)}
                value={subsNo}
            >
            </TextInput>
            <TextInput placeholder={'adres'}
                onChangeText={(text) => setAdr(text)}
                value={adr}
            >
            </TextInput>
            <Button
                title={'Güncelle'}
                onPress={updateData}></Button>
        </View>
    </View >
</>
*/
export {db};
