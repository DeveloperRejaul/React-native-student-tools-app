import {StyleSheet, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {Colors} from '../string/AppColors.js';
import {height, width} from '../string/AppDimension.js';
import {Ionicons, Octicons, MaterialCommunityIcons} from '../string/AppIcon.js';
import FontName from '../string/FontName.js';
import {useTheme} from '../theme/ThemeProvider.js';

export default function BoxCom({
  text,
  source,
  onPress,
  BtnStyle,
  imgStyle,
  TextStyle,
  IoniconsIconName,
  OcticonsIconNam,
  MaterialCommunityIconsName,
  iconStyle,
  iconSize,
}) {
  const {isDark} = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[styles.box, BtnStyle]}
      android_ripple={{color: isDark ? '' : '#dcfce7'}}>
      {source && <Image style={[styles.BoxImg, imgStyle]} source={source} />}
      {IoniconsIconName && (
        <Ionicons
          name={IoniconsIconName}
          size={iconSize ? iconSize : 80}
          color={Colors.green}
          style={iconStyle}
        />
      )}
      {OcticonsIconNam && (
        <Octicons
          name={OcticonsIconNam}
          size={iconSize ? iconSize : 80}
          color={Colors.green}
          style={iconStyle}
        />
      )}
      {MaterialCommunityIconsName && (
        <MaterialCommunityIcons
          name={MaterialCommunityIconsName}
          size={iconSize ? iconSize : 80}
          color={Colors.green}
          style={iconStyle}
        />
      )}
      <Text style={[styles.text, TextStyle]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.green,
    width: width / 2 - 20,
    height: height / 6,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxImg: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.Font_C,
    fontFamily: FontName.LeagueSpartan_Regular,
    fontWeight: '800',
  },
});
