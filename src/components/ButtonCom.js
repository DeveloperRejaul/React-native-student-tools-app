import {Pressable, StyleSheet, Text, Animated} from 'react-native';
import React, {useRef, memo} from 'react';
import {Colors} from '../string/AppColors.js';
import {RSF, RSH, RSW, width} from '../string/AppDimension.js';
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
} from '../string/AppIcon.js';

function ButtonCom({
  text,
  onPress,
  style,
  textStyle,
  IconColor,
  IoniconsName,
  MaterialIconsName,
  MaterialCommunityIconsName,
  OcticonsName,
  IconSize,
}) {
  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
      tension: 100,
      delay: 100,
    }).start();
  };
  const onPressOut = () => {
    setTimeout(() => {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        tension: 100,
      }).start();
    }, 100);
  };

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <Pressable
        style={[styles.resultBtn, style]}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        {MaterialCommunityIcons && (
          <MaterialCommunityIcons
            name={MaterialCommunityIconsName}
            size={IconSize ? IconSize : 20}
            color={IconColor ? IconColor : Colors.Font_C}
          />
        )}
        {Ionicons && (
          <Ionicons
            name={IoniconsName}
            size={IconSize ? IconSize : 20}
            color={IconColor ? IconColor : Colors.Font_C}
          />
        )}

        {MaterialIcons && (
          <MaterialIcons
            name={MaterialIconsName}
            size={IconSize ? IconSize : 20}
            color={IconColor ? IconColor : Colors.Font_C}
          />
        )}
        {Octicons && (
          <Octicons
            name={OcticonsName}
            size={IconSize ? IconSize : 20}
            color={IconColor ? IconColor : Colors.Font_C}
          />
        )}
        <Text style={[styles.btnText, textStyle]}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
}

export default memo(ButtonCom);

const styles = StyleSheet.create({
  resultBtn: {
    paddingHorizontal: RSW(1.5),
    borderRadius: 15,
    paddingVertical: RSH(0.5),
    width: RSW(100) / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: RSF(1.5),
  },
});
