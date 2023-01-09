import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RSF} from '../../string/AppDimension.js';
import {useTheme} from '../../theme/ThemeProvider.js';

export default function LineCom({style}) {
  const {themeColor} = useTheme();
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: themeColor.text,
        },
        style,
      ]}></View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
  },
});
