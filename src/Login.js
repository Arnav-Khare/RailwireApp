import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback,Button, View, TextInput } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



const Login = () => {
        const [valueUsername, onChangeUsername] = React.useState('');
        const [valuePassowrd, onChangepassword] = React.useState('');
      
  return (      
    <View style={styles.container}>
        <View style = {styles.heading}>
            <Text style = {styles.headingText}>Data Usage Tracker </Text>
        </View>
        <View style= {styles.loginSetup}>
            <View >
                <Text style = {styles.usernameTitle}>Username:</Text>
                <TextInput
                style={styles.usernameInput}
                onChangeText={text => onChangeUsername(text)}
                value={valueUsername}
                placeholder="Enter Username"
                />
            </View>
             <View >
                <Text style={styles.passwordTitle}>Password:</Text>
                    <TextInput
                    style={styles.passwordInput}
                    onChangeText={text => onChangepassword(text)}
                    value={valuePassowrd}
                    placeholder="Enter Password..!"
                    />  
            </View> 
            <Button
            title="Learn More"
            color="lightblue"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
        <View style = {styles.footer}>
            <Text style={{marginLeft:121}}>Made by Arnav-Khare</Text>
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
      justifyContent:'center',
      paddingLeft:44
  },
  headingText :{
      color:"black",
      fontSize: 30, 
  },
  loginSetup: {
      flex:3,
      borderColor: "blue",
      height: 0,
      width: deviceWidth ,
  },
  usernameTitle: {
      marginTop:74,
      marginLeft:151,
      alignItems:'center',
      fontWeight:"400",
  },
  usernameInput:{
      marginTop:11,
      marginLeft:71,
      borderWidth:2,
      width:211,
      height:50,
      paddingLeft:11,
  },  
  passwordTitle: {
    marginTop:44,
    marginLeft:151,
    alignItems:'center',
    fontWeight:"400",
},
  passwordInput:{
    marginTop:11,
    marginLeft:71,
    borderWidth:2,
    width:211,
    height:50,
    paddingLeft:11,
},
  footer : {
      flex:0.5,
  }
})


export default Login;


 