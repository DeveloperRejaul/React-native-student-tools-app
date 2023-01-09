import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';
import {RSF, RSH, RSW} from '../string/AppDimension.js';
import FontName from '../string/FontName.js';
import {useTheme} from '../theme/ThemeProvider.js';

export default function AleartCom({
  state,
  handelAlert = () => {},
  OK = () => {},
  Cencle = () => {},
  bodyText,
}) {
  const {themeColor} = useTheme();
  const styles = getStyles(themeColor);
  return (
    <Modal
      transparent
      visible={state}
      animationType={'fade'}
      onRequestClose={handelAlert}>
      <View style={styles.Container}>
        <View style={styles.innerModel}>
          <View style={styles.Title}>
            <Text style={styles.taiteText}>WORINING</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>{bodyText}</Text>
          </View>
          <View style={styles.footer}>
            <Text onPress={Cencle} style={styles.footerText}>
              Cancle
            </Text>
            <Text onPress={OK} style={styles.footerText}>
              OK
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const getStyles = ({bg, text2, Icon}) =>
  StyleSheet.create({
    Container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#00000099',
    },
    innerModel: {
      height: RSH(100) / 2.5,
      width: RSW(100) / 1.2,
      backgroundColor: bg,
      borderRadius: RSF(1),
    },
    Title: {
      backgroundColor: bg,
      borderTopEndRadius: RSF(1),
      borderTopLeftRadius: RSF(1),
      padding: RSF(0.5),
      height: RSH(6),
      alignItems: 'center',
      justifyContent: 'center',
    },
    taiteText: {
      fontSize: RSF(2.5),
      fontFamily: FontName.LeagueSpartan_Bold,
      textAlign: 'center',
      color: text2,
    },
    body: {
      paddingHorizontal: RSW(1),
      height: RSH(26),
      justifyContent: 'center',
      alignItems: 'center',
    },
    bodyText: {
      fontSize: RSF(2.5),
      fontFamily: FontName.Poppins_Regular,
      color: text2,
      textAlign: 'center',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: RSW(5),
      height: RSH(6),
      // backgroundColor: Colors.red,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      alignItems: 'center',
    },
    footerText: {
      fontSize: RSF(2.5),
      color: Icon,
      fontFamily: FontName.Poppins_Bold,
    },
  });
