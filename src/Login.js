import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View, TextInput } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



const Login = () => {
        const [valueUsername, onChangeUsername] = React.useState('Useless Placeholder');
        const [valuePassowrd, onChangepassword] = React.useState('Useless Placeholder');
      
  return (      
    <View style={styles.container}>
        <View style = {styles.heading}>
            <Text style = {styles.headingText}>Data Usage Tracker </Text>
        </View>
        <View style= {styles.loginSetup}>
        <View style = {{position:"relative",marginTop:230,}}>
            <Text style = {{paddingTop:0,borderWidth:1}}>Username:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 2 ,borderRadius:40,}}
            onChangeText={text => onChangeUsername(text)}
            value={valueUsername}
            />

            <Text>Password:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 2 ,borderRadius:40,}}
            onChangeText={text => onChangepassword(text)}
            value={valuePassowrd}
            />
            </View> 
        </View>
        <View style = {styles.footer}>
            <Text>Made by Arnav-Khare</Text>
        </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    height:  deviceHeight + 40,
    width: deviceWidth ,
    backgroundColor: '#e4f4f7',
  },
  heading: {
      position:"relative",
      marginTop:20,
      width:deviceWidth,
      flex:1,
      borderWidth:1
  },
  headingText :{
      color:"black",
      fontSize: 30,
      
  },
  loginSetup: {
      flex:3,
      borderWidth:2,
      borderColor: "blue",
      height: 0,
      width: deviceWidth ,

  },
  footer : {
      flex:0.5,
      borderWidth:2,
  }
})


export default Login;


 