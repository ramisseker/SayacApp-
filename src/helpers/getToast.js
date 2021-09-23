import Toast from 'react-native-toast-message';

const getToast = (err, errText) => {
  Toast.show({
    type: err ? 'error' : 'success',
    position: err ? 'bottom' : 'top',
    text1: err ? 'Hata!' : 'Başarılı',
    text2: err ? err : errText ? errText : 'Giriş işlemi başarılı.',
    visibilityTime: 2500,
    autoHide: true,
    topOffset: 10,
    bottomOffset: 30,
  });
};
export {getToast};
