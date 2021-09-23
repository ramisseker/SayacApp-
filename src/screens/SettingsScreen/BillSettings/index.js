import {
  CustomButton,
  CustomButtonWithSvg,
  CustomCommonHeader,
  CustomInputLabel,
  colors,
  fonts,
} from '~components';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {add_house, arrow, delete_house, home_filter, home_logo} from '~assets';
import {fontSize, goBack} from '~utils';

import {BillSettingsValidationSchema} from '~schema';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import {db} from '~request';
import styles from './styles';

const BillSettings = ({route}) => {
  let data = route.params.item;
  let db;

  const [formikInitialValues, setFormikinitialValues] = useState({
    birimfiyat: `${data.birimfiyat}`,
    atiksubedeli: `${data.atiksubedeli}`,
    ctvbedeli: `${data.ctvbedeli}`,
    bakimbedeli: `${data.bakimbedeli}`,
    kdvorani: `${data.kdvorani}`,
    gecikmefaiziorani: `${data.gecikmefaiziorani}`,
    faturaodemesuresi: `${data.faturaodemesuresi}`,
    sayacdongugunu: `${data.sayacdongugunu}`,
  });

  useEffect(() => {
    SQLite.enablePromise(true);
    SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
      .then(dbRes => {
        db = dbRes;
        readData();
      })
      .catch(e => console.log(e));
  }, []);
  const readData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM billsSettings', [], (tx, result) => {
        setData(result.rows.item(0));
      });
    });
  };
  const updateData = async values => {
    if (data.id.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE billsSettings SET birimfiyat = ?, atiksubedeli = ?, ctvbedeli = ?, bakimbedeli = ?, kdvorani = ?, gecikmefaiziorani = ?, faturaodemesuresi = ?, sayacdongugunu = ? WHERE id = ?',
            [
              values.birimfiyat,
              values.atiksubedeli,
              values.ctvbedeli,
              values.bakimbedeli,
              values.kdvorani,
              values.gecikmefaiziorani,
              values.faturaodemesuresi,
              values.sayacdongugunu,
              data.id,
            ],
            () => {
              Alert.alert('Success!', 'Your data has been updated.');
            },
            error => {
              console.log(error);
            },
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.Avoid}>
      <Formik
        validationSchema={BillSettingsValidationSchema}
        initialValues={formikInitialValues}
        //onSubmit={values => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={styles.Container}>
            <CustomCommonHeader
              activeBottom={false}
              backButton={
                <TouchableOpacity
                  onPress={() => goBack()}
                  style={styles.CustomBack}>
                  <VectorImage source={arrow} />
                  <Text style={styles.CustomBackText}>Fatura değerleri</Text>
                </TouchableOpacity>
              }
              svg={home_logo}
            />
            {console.log(data)}
            <CustomInputLabel
              name={'atiksubedeli'}
              containerProps={{
                label: 'Atık su bedeli(kesin olacak)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'birimfiyat'}
              containerProps={{
                label: 'Birim fiyatı(kesin olacak)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'ctvbedeli'}
              containerProps={{
                label: 'ÇTV bedeli(kesin olacak)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'bakimbedeli'}
              containerProps={{
                label: 'Bakım bedeli(işleme dahil edilmesin)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'kdvorani'}
              containerProps={{
                label: 'Kdv oranı(kesin olacak)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'gecikmefaiziorani'}
              containerProps={{
                label: 'Gecikme faizi oranı(%1,6)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'faturaodemesuresi'}
              containerProps={{
                label:
                  'Fatura ödeme süresi (gün)(fatura kesim tarihi ile son ödeme tarihi arasındaki fark)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'sayacdongugunu'}
              containerProps={{
                label: 'Sayaç döngü günü (her ayın kaçıncı günü)',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomButton
              disabled={!(values.kdvorani !== '' && isValid === true)}
              textName={'Güncelle'}
              onPress={() => {
                updateData(values);
                goBack();
              }}
              buttonStyle={styles.Button}
              buttonColor={
                values.kdvorani !== '' && isValid === true
                  ? colors.MainBlue
                  : colors.MainDarkGray
              }
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};
export {BillSettings};
