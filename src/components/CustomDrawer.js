import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import imgPhath from '../string/ImgPhath.js';
import {Colors} from '../string/AppColors.js';
import {height, RSF, RSH, RSW} from '../string/AppDimension.js';
import FontName from '../string/FontName.js';
import {Ionicons, Octicons, Feather} from '../string/AppIcon.js';
import {openUrlFnc} from '../helperFnc/LinkingUrl.js';
import {useTheme} from '../theme/ThemeProvider.js';
import SwitchCom from './Switch/SwitchCom.js';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles.js';
import LineCom from './Line/LineCom.js';

// Creating Layout Animation
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function CustomDrawerContent(props) {
  const {isDark, themeColor} = useTheme();
  const styles = getStyles(themeColor, isDark);
  const {toggleSwitch} = useTheme();

  // Handaling Theme Switch
  const handelSwitch = async () => {
    // Creating Layout Animation
    LayoutAnimation.easeInEaseOut();
    toggleSwitch();
  };

  return (
    <DrawerContentScrollView
      {...props}
      style={styles.container}
      scrollEnabled={false}>
      <View style={styles.IconBody}>
        <Image source={imgPhath.AppIcon} style={styles.AppLogo} />
        <Text style={styles.logoText}>Students Tools </Text>
      </View>
      <LineCom style={{marginBottom: RSH(1)}} />
      {/* For Raiting */}
      <View style={styles.innerContainer}>
        <ScrollView>
          <View>
            <DrawerItemList {...props} />
            {/* Theme  */}
            <Pressable style={[GlobalStyles.row, styles.theme]}>
              <View style={[GlobalStyles.row]}>
                <Ionicons
                  name={isDark ? 'moon-outline' : 'sunny'}
                  size={RSF(3)}
                  color={themeColor.text}
                />
                <Text style={styles.themeText}>
                  {isDark ? 'Day Theme' : 'Dark Theme'}
                </Text>
              </View>
              <SwitchCom onPress={handelSwitch} />
            </Pressable>

            {/* Rating US */}
            <DrawerItem
              labelStyle={{
                color: themeColor.text,
              }}
              icon={({focused}) => (
                <Octicons
                  name="star-fill"
                  size={RSF(3)}
                  color={themeColor.text}
                />
              )}
              label="Rating Us"
              // onPress={() => openUrlFnc('https://mywebsite.com/help')}
            />

            {/* For More App */}
            <DrawerItem
              labelStyle={{
                color: themeColor.text,
              }}
              icon={({}) => (
                <Octicons name="apps" size={RSF(3)} color={themeColor.text} />
              )}
              label="Our More App"
              onPress={() =>
                openUrlFnc(
                  'https://play.google.com/store/apps/dev?id=7721085576223233782',
                )
              }
            />
          </View>
        </ScrollView>
        {/* For Share */}
        <Pressable
          style={styles.buttom}
          // onPress={ShareFun}
        >
          <Text style={styles.ShareText}>Tell Your Friends</Text>
          <View>
            <Ionicons
              style={styles.Icon}
              name="share-social"
              size={RSF(3)}
              color={themeColor.text}
            />
          </View>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

const getStyles = ({bg, text, DrawerTopBg}) =>
  StyleSheet.create({
    container: {
      height: RSH(100),
      backgroundColor: bg,
    },
    IconBody: {
      backgroundColor: DrawerTopBg,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: RSF(-1),
      height: RSH(100) / 4,
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'space-between',
      height: (height / 4) * 3,
    },
    alinment: {
      justifyContent: 'space-between',
    },
    AppLogo: {
      height: RSH(12),
      width: RSH(12),
      marginTop: RSF(3),
      borderRadius: 7,
    },
    logoText: {
      fontSize: RSF(4),
      color: text,
      fontFamily: FontName.Righteous_Regular,
      marginTop: RSH(1),
    },

    buttom: {
      borderTopWidth: 1,
      borderTopColor: Colors.Grey,
      paddingHorizontal: RSH(1),
      flexDirection: 'row',
      justifyContent: 'center',
      height: RSH(13),
      alignItems: 'center',
    },
    ShareText: {
      fontSize: RSF(2),
      color: text,
      fontFamily: FontName.Poppins_Regular,
    },
    Icon: {
      marginLeft: RSW(10),
    },
    theme: {
      justifyContent: 'space-between',
      marginHorizontal: RSW(4),
    },
    themeText: {
      marginLeft: RSW(8),
      color: text,
      fontSize: RSF(2),
    },
  });
