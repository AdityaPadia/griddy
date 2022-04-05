/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   Text,
   TextInput,
   View,
   Image,
   Keyboard
 } from 'react-native';
import AndroidTextInputNativeComponent from 'react-native/Libraries/Components/TextInput/AndroidTextInputNativeComponent';

 
 const LoginScreen: () => Node = () => {
 
   return (
     <View style = {styles.container} onPress = {() => Keyboard.dismiss()}>
         <View style = {{margin : 20, marginTop : 60, marginBottom : 40}}>
             <Text style = {{fontSize : 36}}>
                Sign in
             </Text>
         </View>
         <View style = {{marginLeft : 20}}>
            <Text style = {{fontSize : 20}}>
                EMAIL: 
            </Text>
            <TextInput placeholder='jane@example.com' style = {{height : 40, width : 350, borderWidth : 1, borderColor : "black", padding : 10, marginTop : 10, borderWidth : 2}}>

            </TextInput>
            
            <Text style = {{fontSize : 20, marginTop : 30}}>
                PASSWORD: 
            </Text>
            <TextInput placeholder='Enter Password' style = {{height : 40, width : 350, borderWidth : 1, borderColor : "black", padding : 10, marginTop : 10, borderWidth : 2}}>

            </TextInput>
         </View>
         <TouchableOpacity style = {{marginLeft : 20}}>
             <View style = {{height : 40, width : 350, alignItems : "center", justifyContent : "center", marginTop : 30, backgroundColor : "black", borderRadius : 5}}>
                    <Text style = {{color : "white", fontWeight : "bold"}}>
                        Sign in
                    </Text>

             </View>

         </TouchableOpacity>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
     container : {
         flex : 1,
         alignContent : 'flex-start',
         alignSelf : 'flex-start',
         justifyContent : 'flex-start',
     },


 });
 
 export default LoginScreen; 