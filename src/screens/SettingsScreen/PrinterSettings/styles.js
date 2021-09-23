import { calcWidth, calculate, fontSize } from '~utils';
import { colors, fonts, globalStyle } from '~components';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        width: '100%',
        height: 50,

        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    textStyle: {

    },


});
export default styles;