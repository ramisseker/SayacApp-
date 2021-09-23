import {View} from 'react-native';
import React from 'react';
import {home_logo, home_filter} from '~/assets';
import {fontSize} from '~/utils';
import {
  MontlyStatusCard,
  MontsButton,
  CustomCommonHeader,
  CustomButtonWithSvg,
} from '~/components';

const StatusScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <CustomCommonHeader
        svg={home_logo}
        activeBottom={false}
        rightButton={
          <CustomButtonWithSvg
            containerStyle={{marginRight: fontSize(10)}}
            svg={home_filter}
            text={'Yıl 2021'}
          />
        }
      />
      <MontlyStatusCard navigation={navigation} />
    </View>
  );
};
export {StatusScreen};
