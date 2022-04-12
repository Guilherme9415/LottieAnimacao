import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  Animated,
  StatusBar,
  StyleSheet,
} from 'react-native';

import LottieView from 'lottie-react-native';
import {useNavigation, CommonActions} from '@react-navigation/core';
import homeJson from '../assets/home.json';

const size = Dimensions.get('window').width * 0.9;

export default function SplashScreen() {
  const navigation = useNavigation();
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    }, 4000);
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6505a4',
      }}>
      <StatusBar animated={true} backgroundColor="#6505a4" />

      <LottieView
        source={homeJson}
        style={{width: size, height: size}}
        autoPlay
        loop
        renderMode="contain"
        />
       <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
          <Text style={[styles.logoTexts]}>Ai</Text>
          <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
            Housing
          </Animated.Text>
        </Animated.View>
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({

  logoTexts: {
    fontSize: 35,
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingRight:10,
    marginTop:-70
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: 'white',
    marginTop:-70
  },
  
  logoContainer: {
    flexDirection: 'row',
  },
});