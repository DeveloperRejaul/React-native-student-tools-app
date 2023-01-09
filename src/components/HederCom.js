import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../string/AppColors.js';
import {width} from '../string/AppDimension.js';
import {Ionicons} from '../string/AppIcon.js';

export default function HederCom({
  text,
  onPress,
  IconeName,
  TextStyle,
  IconStyle,
  containerStyle,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable onPress={onPress}>
        <Ionicons
          name={IconeName ? IconeName : 'arrow-back-outline'}
          size={30}
          color={Colors.white}
          style={IconStyle}
        />
      </Pressable>
      <Text style={[styles.title, TextStyle]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    width: width,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.white,
    marginLeft: 10,
  },
});
