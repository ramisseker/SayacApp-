import { colors, globalStyle, fonts, sizes } from '../config';
import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth, fontSize } from '~utils';

const styles = StyleSheet.create({

    Container: {
        marginVertical: fontSize(8)

    },
    Bill: {
        ...globalStyle.asc,
        ...globalStyle.fdr,
        ...globalStyle.jcsb,
        padding: sizes.h6,
        borderRadius: fontSize(24),
        width: calcWidth(88),
        elevation: 10

    },
    Time: {
        ...globalStyle.fdr,
    },
    Svg: {
        width: fontSize(20),
        height: fontSize(20),
        marginRight: fontSize(10)
    },
    TimeText: {
        marginRight: fontSize(3),
        fontSize: sizes.h6,
        marginVertical: fontSize(1)
    },
    Status: {
        fontSize: fontSize(12),
        marginRight: fontSize(6)
    },
    Value: {
        marginVertical: fontSize(-4),
        fontSize: fontSize(16),
        color: colors.MainBrown
    }
});

export default styles;