import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../theme/ThemeProvider.js';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const SwitchCom = ({onPress}) => {
  const {isDark} = useTheme();
  const styles = getStyle(isDark);

  return (
    <Pressable style={styles.switchBody} onPress={onPress}>
      <View
        style={[
          styles.switchInner,
          isDark ? styles.dark : styles.light,
        ]}></View>
    </Pressable>
  );
};

export default SwitchCom;

const getStyle = isDark =>
  StyleSheet.create({
    switchBody: {
      height: responsiveScreenHeight(3.37),
      width: responsiveScreenWidth(11),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 15,
      position: 'relative',
      borderColor: isDark ? '#f59e0b' : '#4ade80',
    },
    switchInner: {
      height: responsiveScreenHeight(3.1),
      width: responsiveScreenWidth(6),
      backgroundColor: isDark ? '#f59e0b' : '#4ade80',
      borderRadius: 16,
      position: 'absolute',
    },
    dark: {
      right: 0,
    },
    light: {
      left: 0,
    },
  });
