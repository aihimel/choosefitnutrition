import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  View, 
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

import { Loose, Fit, Bulk } from '../Data/HomeData';

const Item = ({title}) => {
  return(
    <View style={Styles.ListItemWrap} >
      <Text style={Styles.ListItem}>
        <Ionicons 
          name="md-checkmark" 
          size={16} 
          color="#fff" 
          style={{marginRight: '4px'}}
        />
        {title}
      </Text>
    </View>
  );
}

const ListBlock = ({data, press}) => {
  const renderItem = ({item}) => {
    return(
      <Item title={item.title} />
    );
  }
  return(
    <TouchableHighlight onPress={press}>
      <View style={Styles.ListBlockWrapper} >
        <Text style={Styles.ListHeading}>{data.heading}</Text>
        <FlatList
          data={data.list}
          renderItem={renderItem}
          keyExtractor={() => uuid.v4()}
        />
      </View>
    </TouchableHighlight>
  );
}

export const Home = ({navigation}) => {

  const onPress = () => {
    navigation.navigate('Order', {title: 'Order'})
  }

  return(
    <View>
      <SafeAreaView style={Styles.SafeAreaView}>
        <ListBlock 
          data={Loose}
          press={onPress}
        />
        <ListBlock 
          data={Fit}
          press={onPress}
        />
        <ListBlock 
          data={Bulk}
          press={onPress}
        />
      </SafeAreaView>
    </View>
  );
}

const Styles = StyleSheet.create({
  ListBlockWrapper: {
    backgroundColor: '#8ebb3e', 
    color: '#fff', 
    paddingTop: '16px',
    paddingBottom: '8px', 
    marginTop: '10px',
    marginLeft: '12px',
    marginRight: '12px',
    borderRadius: '5px',
  },
  ListHeading: {
    fontSize: '24px', 
    textAlign: 'center', 
    color: '#fff',
    borderBottomWidth: '1px',
    borderColor: '#fff',
    paddingBottom: '8px',
    marginBottom: '10px',
  },
  ListItemWrap: {
    padding: '8px',
    textAlign: 'left',
  },
  ListItem: {
    fontSize: '14px', 
    color: '#fff', 
    borderBottomWidth: '1px', 
    borderBottomColor: '#d9cbcb', 
    paddingBottom: '8px'
  }
});

export default Home;