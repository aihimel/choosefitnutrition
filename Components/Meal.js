import React , { useState } from 'react';
import { 
  SafeAreaView,
  View,
  Switch,
  Text, 
  Button 
} from 'react-native';

const Breakfast = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
      }}
    >
      <View 
        style={{ 
          flex: 1, 
          alignSelf: 'stretch' 
        }}
      >
        <Text
          style={{
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          Breakfast
        </Text>
      </View>

      <View 
        style={{
          flex: 1,
          alignSelf: 'stretch'
        }}
      >
        <Text>$3.80</Text>
      </View>

      <View
        style={{
          flex: 1,
          alignSelf: 'stretch'
        }}
      >
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );

}

const Lunch = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
      }}
    >
      <View 
        style={{ 
          flex: 1, 
          alignSelf: 'stretch' 
        }}
      >
        <Text
          style={{
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          Lunch
        </Text>
      </View>

      <View 
        style={{
          flex: 1,
          alignSelf: 'stretch'
        }}
      >
        <Text>$7.55</Text>
      </View>

      <View
        style={{
          flex: 1,
          alignSelf: 'stretch'
        }}
      >
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={true}
        />
      </View>
    </View>
  );

}

const Dinner = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
      }}
    >
      <View 
        style={{ 
          flex: 1, 
          alignSelf: 'stretch' 
        }}
      >
        <Text
          style={{
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          Dinner
        </Text>
      </View>
      <View 
        style={{
          flex: 1,
          alignSelf: 'stretch'
        }}
      >
        <Text>$7.55</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch'
        }}
      >
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={true}
        />
      </View>
    </View>
  );

}

export const Meal = ({navigation}) => {

  return(
    <SafeAreaView
      style={{
        marginLeft: '16px',
        marginRight: '16px',
      }}
    >
      <View
        style={{
          marginTop: '24px',
          marginBottom: '16px',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: '800',
          }}
        >
          Select Your Meal Plan
        </Text>
      </View>
      <Breakfast />
      <Lunch />
      <Dinner />

      <View
        style={{
          marginTop: '16px',
          marginBottom: '16px',
        }}
      >
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              alignSelf: 'stretch'
            }}
          >
            <Text
              style={{
                fontSize: '15px',
                fontWeight: '500'
              }}
            >
              Total: 
            </Text>
          </View>
          <View>
            <Text>$100</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: '16px'
          }}
        >
          <Button 
            title="Order Now!"
          />
        </View>
        
      </View>

    </SafeAreaView>
  );
}

export default Meal;