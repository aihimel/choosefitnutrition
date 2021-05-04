import React from 'react';
import { 
  SafeAreaView,
  View, 
  Text, 
  FlatList,
  Image,
  Button
} from 'react-native';

import { OrderData } from '../Data/OrderData';

import uuid from 'react-native-uuid';
import { Allergies } from '../Data/OrderData';
import { ceil } from 'react-native-reanimated';

export const Order = ({navigation}) => {
  
  const renderItem = ({item}) => {
    return(
      <View 
        style={{
          marginTop: '16px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image 
          source={{uri: item.uri}} 
          style={{
            width: item.width, 
            height: item.height,
          }}
        />
        <Text 
          style={{
            padding: '8px',
            fontSize: '14px',
            fontWeight: '800'
          }}
        >{item.title}</Text>
      </View>
    );
  }

  return(
    <SafeAreaView>
      <View>
        <Text style={{textAlign: 'center', fontSize: '24px', marginTop: '10px'}}>Do you have allergies?</Text>
        <FlatList
          data={Allergies}
          renderItem={renderItem}
          keyExtractor={() => uuid.v4()}
        />
      </View>
      <View
        style={{
          marginTop: '16px', 
          marginBottom: '16px',
          padding: '16px'
        }}
      >
        <Button
          title="Done"
          onPress={() => {
            navigation.navigate('Meal', {title: 'Meal'})
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Order;