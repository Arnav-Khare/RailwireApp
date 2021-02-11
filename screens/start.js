import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App({navigation}) {
    async function gotoLoginScreen () {
        try {
            let response = await fetch(
              'http://192.168.0.156:5500/openPage'
            );
            let json = await response.json();
            console.log(json);
            return json.movies;
          } catch (error) {
            console.error(error);
          }
        navigation.navigate('Login')
}
  return (
     <View>
           <TouchableOpacity onPress = {gotoLoginScreen}>
                <View style = {styles.startButton}
                    >
                    <Text style = {{color: 'white'}}>Button</Text>
                </View>
            </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
 startButton:{
    backgroundColor: 'lightblue', alignItems: 'center', 
                                justifyContent: 'center', borderRadius: 35,width:70,height:55,
                                marginLeft:230,marginTop:32,
 }
});
