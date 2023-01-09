import {Image, StatusBar, Text, View, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import ImgPhath from '../../string/ImgPhath.js';
import {useTheme} from '../../theme/ThemeProvider.js';
import useStyle from './style.js';
import {useNavigation} from '@react-navigation/native';

const SplassScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1.2, 0.9, 1],
  });

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 2,
      useNativeDriver: true,
      duration: 1000,
    }).start(({finished}) => {
      finished && navigation.replace('MyDrawer');
    });
  }, []);

  const styles = useStyle();
  const navigation = useNavigation();
  const {themeColor} = useTheme();

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={themeColor.bg} />
      <Animated.View style={[styles.logo_Aline, {transform: [{scale}]}]}>
        <Image style={styles.img} source={ImgPhath.Tr_App_Logo} />
        <Text style={styles.img_text}>Student Tools</Text>
      </Animated.View>
    </View>
  );
};

export default SplassScreen;
