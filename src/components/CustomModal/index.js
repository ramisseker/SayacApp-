import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import {PropTypes} from '~/components/config';
import VectorImage from 'react-native-vector-image';
import {meterRead} from '~assets';
import styles from './styles';

const CustomModal = props => {
  const {
    buttonNumber,
    inputNumber,
    buttonOneText,
    onPress,
    buttonTwoText,
    svg,
    modalText,
    visibleValue,
    closeFunc,
    openFunc,
    setValue,
    runFunc,
  } = props;

  const pressFunction = () => {
    openFunc == null ? closeFunc() : (closeFunc(), openFunc());
    runFunc();
  };

  const modalBackgroundStyle = {backgroundColor: 'rgba(0, 0, 0, 0.5)'};
  return (
    <>
      <View style={styles.modal}>
        <Modal
          visible={visibleValue}
          transparent={true}
          animationType="slide"
          style={{borderWidth: 2}}>
          <View style={[styles.modal, modalBackgroundStyle]}>
            <View style={styles.modalinside}>
              {svg == null ? null : (
                <VectorImage style={styles.modalSvg} source={svg} />
              )}
              <Text style={styles.modalText}>{modalText}</Text>
              {inputNumber == 1 ? (
                <TextInput
                  keyboardType='numeric'
                  onChangeText={setValue} style={styles.modalInput}
                />

              ) : null}
              {buttonNumber == 2 ? (
                <View style={styles.modalButtons}>
                  <Pressable
                    style={styles.save}
                    onPress={() => pressFunction()}>
                    <Text style={{color: 'white'}}>{buttonOneText}</Text>
                  </Pressable>
                  <Pressable style={styles.cancel} onPress={() => closeFunc()}>
                    <Text style={{color: 'blue'}}>{buttonTwoText}</Text>
                  </Pressable>
                </View>
              ) : null}
              {buttonNumber == 1 ? (
                <Pressable style={styles.saved} onPress={() => closeFunc()}>
                  <Text style={{color: 'white'}}>{buttonOneText}</Text>
                </Pressable>
              ) : null}
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
CustomModal.propTypes = {
  visibleValue: PropTypes.bool,
  // buttonStyle: ViewPropTypes.style,
  // buttonColor: ViewPropTypes.style,
  // onPress: PropTypes.func,
  // textStyle: Text.propTypes.style,
  // textColor: Text.propTypes.style,
  modalText: PropTypes.string,
  buttonNumber: PropTypes.number,
  buttonOneText: PropTypes.string,
  buttonTwoText: PropTypes.string,
  inputNumber: PropTypes.number,
  buttonNumber: PropTypes.number,
  closeFunc: PropTypes.func,
  openFunc: PropTypes.func,
};
CustomModal.defaultProps = {
  buttonOneText: 'Tamam',
  buttonTwoText: 'İptal',
  // onPress=() => setModalVisible(true)
  inputNumber: 0,
  buttonNumber: 1,
  // textColor: colors.MainWhite,
  // textName: 'CustomButton',
  
};
export {CustomModal};
