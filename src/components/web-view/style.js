import {StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../string/AppColors.js';
import {height, RSF, RSH, RSW, width} from '../../string/AppDimension.js';
import FontName from '../../string/FontName.js';
import {useTheme} from '../../theme/ThemeProvider.js';

export function useCustomStyle() {
  const {themeColor} = useTheme();
  const {DrawerTopBg, GrawerActiveBg, Icon, bg, box, text, text2} = themeColor;

  const styles = StyleSheet.create({
    header: {
      flex: 1,
    },

    LottieBody: {
      height: RSH(100),
      width: RSW(100),
      justifyContent: 'center',
      alignItems: 'center',
    },

    Lottie: {
      backgroundColor: bg,
      borderRadius: RSF(1),
      shadowColor: '#333533',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      height: RSH(12),
      width: RSH(12),
    },
    modelBody: {
      height: RSH(100),
      width: RSW(100),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000099',
    },
    internetAlert: {
      height: RSH(100) / 3,
      width: RSW(100) / 1.4,
      backgroundColor: Colors.Box_bg,
      borderRadius: 10,
    },

    titleBody: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      width: '100%',
      borderTopEndRadius: 10,
      borderTopLeftRadius: 10,
    },
    connectionTitle: {
      fontSize: 20,
      fontFamily: FontName.Roboto_Bold,
      color: Colors.Font_C,
    },
    modelinner: {
      marginHorizontal: 7,
    },
    subTitle: {
      color: Colors.Font_C,
      fontSize: 13,
      textAlign: 'center',
      fontFamily: FontName.Poppins_Regular,
      paddingTop: 5,
    },
    switchBody: {
      flexDirection: 'row',
    },
    leftSwitchBody: {
      width: '49%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    RightSwitchBody: {
      width: '49%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      width: '1%',
      backgroundColor: Colors.Font_C,
      paddingVertical: 65,
    },
    closeBtnBody: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      height: 40,
    },
    alineView: {
      flex: 3,
      justifyContent: 'space-between',
      padding: 7,
    },
    switch: {
      paddingVertical: 5,
    },
    switchText: {
      color: Colors.Grey_2,
      fontSize: 13,
      fontFamily: FontName.Poppins_Regular,
    },
    closeBtn: {
      color: Colors.Font_C,
      fontSize: 14,
      fontFamily: FontName.Poppins_Bold,
    },

    headerContent: {
      backgroundColor: bg,
    },
    headerIcon: {
      color: text,
    },
    headerText: {
      color: text,
    },
  });

  // Return Style
  return styles;
}
