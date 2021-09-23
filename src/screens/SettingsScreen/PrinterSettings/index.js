import {
  Button,
  FlatList,
  NativeEventEmitter,
  NativeModules,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import BleManager from 'react-native-ble-manager';
import {CustomButton} from '~components';
import styles from './styles';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const PrinterSettings = () => {
  const [connected, setConnected] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const peripherals = new Map();
  const [list, setList] = useState([]);
  const [enable, setEnable] = useState(false);
  const [found, setFound] = useState(false);
  const startScan = async () => {
    if (enable) {
      if (!isScanning) {
        await BleManager.scan([], 5, true)
          .then(results => {
            console.log('Scanning...');
            setIsScanning(true);
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  };

  const handleStopScan = () => {
    console.log('Scan is stopped');
    setIsScanning(false);
  };

  const handleDisconnectedPeripheral = data => {
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));
    }
    console.log('Disconnected from ' + data.peripheral);
  };

  const handleUpdateValueForCharacteristic = data => {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  };

  const retrieveConnected = () => {
    BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
      }
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        peripherals.set(peripheral.id, peripheral);
        setList(Array.from(peripherals.values()));
      }
    });
  };

  const handleDiscoverPeripheral = peripheral => {
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    setList(Array.from(peripherals.values()));
    setFound(true);
  };

  const testPeripheral = peripheral => {
    if (peripheral.connected) {
      BleManager.disconnect(peripheral.id);
      setConnected(false);
    } else {
      BleManager.connect(peripheral.id)
        .then(() => {
          let p = peripherals.get(peripheral.id);
          if (p) {
            p.connected = true;
            peripherals.set(peripheral.id, p);
            setList(Array.from(peripherals.values()));
          }
          console.log('Connected to ' + peripheral.id);

          setConnected(true);
          setTimeout(() => {
            /* Test read current RSSI value */
            BleManager.retrieveServices(peripheral.id).then(peripheralData => {
              retrieveConnected();
              //console.log('Retrieved peripheral services', peripheralData);
              setConnected(true);
              BleManager.readRSSI(peripheral.id).then(rssi => {
                //console.log('Retrieved actual RSSI value', rssi);
                let p = peripherals.get(peripheral.id);
                if (p) {
                  p.rssi = rssi;
                  peripherals.set(peripheral.id, p);
                  setList(Array.from(peripherals.values()));
                }
              });
            });
          }, 900);
        })
        .catch(error => {
          console.log('Connection error', error);
        });
    }
  };
  const first = async () => {
    await BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
        setConnected(false);
      } else {
        console.log(results);

        for (var i = 0; i < results.length; i++) {
          var peripheral = results[i];
          peripheral.connected = true;
          peripherals.set(peripheral.id, peripheral);
          setList(Array.from(peripherals.values()));
        }
        setConnected(true);
      }
    });
    await BleManager.enableBluetooth()
      .then(() => {
        // Success code

        setEnable(true);
        console.log('The bluetooth is already enabled or the user confirm');
      })
      .catch(error => {
        // Failure code
        setEnable(false);
        console.log('The user refuse to enable bluetooth');
      });
  };

  const second = () => {};

  useEffect(() => {
    BleManager.start({forceLegacy: true});

    bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral,
    );
    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);
    bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      handleDisconnectedPeripheral,
    );
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      handleUpdateValueForCharacteristic,
    );
    first();
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(result => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ).then(result => {
            if (result) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }

    return () => {
      console.log('unmount');
      bleManagerEmitter.removeListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral,
      );
      bleManagerEmitter.removeListener('BleManagerStopScan', handleStopScan);
      bleManagerEmitter.removeListener(
        'BleManagerDisconnectPeripheral',
        handleDisconnectedPeripheral,
      );
      bleManagerEmitter.removeListener(
        'BleManagerDidUpdateValueForCharacteristic',
        handleUpdateValueForCharacteristic,
      );
    };
  }, []);

  const renderItem = item => {
    const color = item.connected ? 'green' : 'black';

    return (
      <TouchableHighlight onPress={() => testPeripheral(item)}>
        <View style={[styles.row, {backgroundColor: 'white'}]}>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: color,
              padding: 10,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 8,
              textAlign: 'center',
              color: color,
              padding: 2,
              paddingBottom: 20,
            }}>
            {item.id}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.containerMain}>
      {/* {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )} 

                    <View style={{ margin: 10 }}>
                        <Button
                                title={'Scan Bluetooth (' + (isScanning ? 'on' : 'off') + ')'}
                                onPress={() => startScan()}
                            /> 
                    </View>
                    <View style={{ margin: 10 }}>
                        <Button title="Retrieve connected peripherals" onPress={() => retrieveConnected()} />
                    </View>*/}
      <View style={styles.textStyle}>
        {connected ? (
          <FlatList
            data={list}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.id}
          />
        ) : found ? (
          <FlatList
            data={list}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={{textAlign: 'center', color: 'red'}}>
            {isScanning ? 'Scanning' : 'No device found'}
          </Text>
        )}
      </View>

      <View style={styles.bottomView}>
        <CustomButton textName={'Yazıcı Ara'} onPress={() => startScan()} />
      </View>
    </View>
  );
};
export {PrinterSettings};
