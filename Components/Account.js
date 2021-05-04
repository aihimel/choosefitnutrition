import React from 'react';
import { View, Text, Button } from 'react-native';

export const Account = ({navigation}) => {
  return(
    <View>
      <Text>
        <Button 
          title="LogOut"
          onPress={() => {
            navigation.navigate('Order', {title: "Order"})
          }}
        />
      </Text>
    </View>
  );
}

export default Account;