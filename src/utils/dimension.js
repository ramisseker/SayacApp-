import {Dimensions, PixelRatio} from 'react-native';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);
export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
const fontRatio = 0.1375;
const ratio = 0.168;
export const calculate = pix => {
  let value = fontRatio * pix;
  return (calcWidth(value) + calcHeight(value)) / 2;
};
export const fontSize = pix => {
  let value = ratio * pix;
  return (calcWidth(value) + calcHeight(value)) / 2;
};
