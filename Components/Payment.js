import React from 'react';
import { View, Text, Button } from 'react-native';

export const Payment = ({navigation}) => {
  return(
    <View>
      <Text>
        <Button 
          title="Account"
          onPress={() => {
            navigation.navigate('Account', {title: "Order"})
          }}
        />
      </Text>
    </View>
  );
}

export default Payment;