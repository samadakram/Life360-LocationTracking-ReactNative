import React,{ useRef, useEffect } from 'react'
import { Animated, View, Text ,ImageBackground,Image ,StyleSheet ,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const FadeInView = (props,{ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }
      ).start();
    }, [fadeAnim])
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    )
  }
  export default ({navigation}) => {
    return (
      <View style={{flex: 1,alignContent:'center',justifyContent:'center',backgroundColor:'#B388FF'}}>
        <FadeInView >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/Life360.png')} 
         style={{ height: 200, width: 4000, resizeMode: 'contain', borderRadius: 20 }}></Image>
        <View style={{flex:1,position:'relative',width:350,height:350,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={styles.Getstarted}
     onPress={() => navigation.navigate('Login')}>
        <Text style={styles.Getstartedtext}>GetStarted...</Text> 
      </TouchableOpacity>
      </View>
         </View>
        </FadeInView>
       
      </View>
    )
  }
  
const styles = StyleSheet.create({
 
    food:{
        position:'absolute',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center'
  },
  Getstarted: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFFF00",
  },
  Getstartedtext:{
    color:'#000000'
  }
  
  });
