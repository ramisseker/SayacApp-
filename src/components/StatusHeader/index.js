import React from 'react';
import { View , Text } from 'react-native';
import { PropTypes, ViewPropTypes, } from '~/components/config';
import { StatusBadge } from '~components';
import styles from './styles';

const data = [{
    key: 1,
    status: "Okunacak",
    quantity: 2,
},
{
    key: 2,
    status: "Ödenecek",
    quantity: 3,
},
{
    key: 3,
    status: "Tamamlandı",
    quantity: 4,
}];


const StatusHeader = (props) => {
    const { containerStyle } = props;
      return (
         <View style={[styles.Container, containerStyle]}>
            {data.map((item , i) => (
                <StatusBadge
                    key={i}
                    status={item.status}
                    quantity={item.quantity}
                />
            ))}
        </View>
    );
};

 StatusHeader.propTypes = {
     containerStyle: ViewPropTypes.style,
 };
StatusHeader.defaultProps = {
    
};

export { StatusHeader };