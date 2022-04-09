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
   View,
   Image
 } from 'react-native';

 import HomeHeader from '../components/HomeHeader';

 
 const HomeScreen: () => Node = ({navigation}) => {
   console.log(navigation);
 
   return (
     <View style = {styles.container}>
       <HomeHeader />
       <View style = {{borderColor : "black", flex : 0.9}}>

         <View style = {{flex : 0.39, backgroundColor : "#E4A6C8"}}>

           <View style = {{width : "40%", margin : 10, marginLeft : 15}}>
            <Text style = {{fontSize : 24, fontWeight : "bold"}}>TRENDING THRIFTS</Text>
           </View>

           <TouchableOpacity style = {{height : 200, width : 175, alignSelf : "flex-end", marginTop : -60, marginRight : 7}}>
                <Image source = {require("../../assets/420.png")} style = {{height : 200, width : 175}}></Image>
           </TouchableOpacity>

            <TouchableOpacity style = {{height : 35, alignContent : "center", flexDirection : "row"}}>
                <Text style = {{fontSize : 23, paddingTop : 2, paddingLeft : 5}}>
                  420 BOMBER JACKET (M) | 
                </Text>
                <View style = {{backgroundColor : "green", width : 82, height : 27, alignContent : "center", justifyContent : "center", alignSelf : "center", marginLeft : 20, padding : 2}}>
                    <Text style = {{fontSize : 23, alignSelf : "center"}}>
                      $45
                    </Text>
                </View>
            </TouchableOpacity>
         </View>
         <Text style = {{fontSize : 20, padding : 10, alignSelf : "center"}}>
           Shop By Category
         </Text>

         <View>
           
         </View>
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
     container : {
         flex : 1,
         alignContent : 'center',
         alignSelf : 'center',
         justifyContent : 'center',
         width : "100%"
     },


 });
 
 export default HomeScreen;
 