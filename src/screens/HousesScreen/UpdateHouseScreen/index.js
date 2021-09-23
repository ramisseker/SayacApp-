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
import { fontSize, goBack, push } from '~utils';
import { homeStack, mainStack } from '~/config';

import {AddHouseValidationSchema} from '~schema';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SQLite from 'react-native-sqlite-storage';
import VectorImage from 'react-native-vector-image';
import {db} from '~request';
import styles from './styles';

const UpdateHouseScreen = ({route}) => {
  let data = route.params.items;
  let db;
  const [formikInitialValues, setFormikinitialValues] = useState({
    name: `${data.isimsoyisim}`,
    tcno: `${data.tcno}`,
    neighbourhood: `${data.mahalle}`,
    street: `${data.cadde}`,
    doornumber: `${data.sokak}`,
    counternumber: `${data.sayacno}`,
    initialcountervalue: `${data.ilksayacdeg}`,
    subscriberno: `${data.aboneno}`,
    notes: `${data.notlar}`,
  });
  useEffect(() => {
    SQLite.enablePromise(true);
    SQLite.openDatabase({name: 'sayacdb.db', createFromLocation: 1})
      .then(dbRes => {
        db = dbRes;
      })
      .catch(e => console.log(e));
  }, []);

  const updateData = async values => {
    if (data.id.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE houses SET isimsoyisim = ?, tcno = ?, mahalle = ?, cadde = ?, sokak = ?, sayacno = ?, ilksayacdeg = ?, aboneno = ?, notlar = ? WHERE id = ?',
            [
              values.name,
              values.tcno,
              values.neighbourhood,
              values.street,
              values.doornumber,
              values.counternumber,
              values.initialcountervalue,
              values.subscriberno,
              values.notes,
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
    <KeyboardAwareScrollView style={styles.KeyboardAvoid}>
      <Formik
        validationSchema={AddHouseValidationSchema}
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
                  <Text style={styles.CustomBackText}>Düzenle</Text>
                </TouchableOpacity>
              }
              svg={home_logo}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'Ad soyad',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'tcno'}
              containerProps={{
                keyboardType: 'numeric',
                label: 'TC kimlik no',
                placeholder: '',
                maxLength: 11,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
              phone={true}
            />
            <View style={styles.BinaryInput}>
              <CustomInputLabel
                name={'neighbourhood'}
                containerProps={{
                  label: 'Mahalle',
                  placeholder: '',
                  maxLength: 15,
                }}
                succesColor={colors.MainGreen}
                errorColor={colors.MainRed}
                inputContainerStyle={styles.inputContainer}
                containerStyle={styles.inputContainer}
                labelStyle={styles.labelAndError}
                errorStyle={styles.labelAndError}
              />
              <CustomInputLabel
                name={'street'}
                containerProps={{
                  label: 'Cadde',
                  placeholder: '',
                  maxLength: 15,
                }}
                succesColor={colors.MainGreen}
                errorColor={colors.MainRed}
                inputContainerStyle={styles.inputContainer}
                containerStyle={styles.inputContainer}
                labelStyle={styles.labelAndError}
                errorStyle={styles.labelAndError}
              />
            </View>
            <View style={styles.BinaryInput}>
              <CustomInputLabel
                name={'doornumber'}
                containerProps={{
                  label: 'Sokak/kapı no',
                  placeholder: '',
                  maxLength: 15,
                }}
                succesColor={colors.MainGreen}
                errorColor={colors.MainRed}
                inputContainerStyle={styles.inputContainer}
                containerStyle={styles.inputContainer}
                labelStyle={styles.labelAndError}
                errorStyle={styles.labelAndError}
              />
              <CustomInputLabel
                name={'counternumber'}
                containerProps={{
                  keyboardType: 'numeric',
                  label: 'Sayaç no',
                  placeholder: '',
                  maxLength: 10,
                }}
                succesColor={colors.MainGreen}
                errorColor={colors.MainRed}
                inputContainerStyle={styles.inputContainer}
                containerStyle={styles.inputContainer}
                labelStyle={styles.labelAndError}
                errorStyle={styles.labelAndError}
                phone={true}
              />
            </View>
            <View style={styles.BinaryInput}>
              <CustomInputLabel
                name={'initialcountervalue'}
                containerProps={{
                  keyboardType: 'numeric',
                  label: 'İlk sayaç değeri',
                  placeholder: '',
                  maxLength: 10,
                }}
                succesColor={colors.MainGreen}
                errorColor={colors.MainRed}
                inputContainerStyle={styles.inputContainer}
                containerStyle={styles.inputContainer}
                labelStyle={styles.labelAndError}
                errorStyle={styles.labelAndError}
                phone={true}
              />
              <CustomInputLabel
                name={'subscriberno'}
                containerProps={{
                  keyboardType: 'numeric',
                  label: 'Abone no',
                  placeholder: '',
                  maxLength: 10,
                }}
                succesColor={colors.MainGreen}
                errorColor={colors.MainRed}
                inputContainerStyle={styles.inputContainer}
                containerStyle={styles.inputContainer}
                labelStyle={styles.labelAndError}
                errorStyle={styles.labelAndError}
                phone={true}
              />
            </View>
            <CustomInputLabel
              name={'notes'}
              containerProps={{
                keyboardType: 'numeric',
                label: 'Notlar',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomButton
              disabled={!(values.tcno !== '' && isValid === true)}
              textName={'Güncelle'}
              onPress={() => {
                updateData(values);
                goBack();
              }}
              buttonStyle={styles.Button}
              buttonColor={
                values.tcno !== '' && isValid === true
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
export {UpdateHouseScreen};
