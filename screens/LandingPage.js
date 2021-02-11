
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback,Button, View, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

function HomeScreen() {
    return(
        <View>
           <View >Welcome To Railwire Data-Tracker App...</View>
           <View>
                Personal Info: 
                <View>Username: </View><View>Upasana Khare</View>
                <View>Address:</View> <View>H.No 183 Awas vikas Colony</View>
                <View>Mobile Number :</View> <View>9971726724</View>
                <View>Email ID:</View><View>upsanakhare61@gmail.com</View>
                <View>Plan Ends on : </View><View>08 March-2021np</View>
           </View>
        </View>
    )
}

const landingPage =  ({username}) => {
    return (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          {/* //<Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
      );
}

export default landingPage;