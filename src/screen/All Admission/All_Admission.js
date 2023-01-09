import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HederCom from '../../components/HederCom.js';
import {Admission} from './AdmissionAllData.js';
import {MaterialCommunityIcons} from '../../string/AppIcon.js';
import {ScrollView} from 'react-native-gesture-handler';
import FontName from '../../string/FontName.js';
import {RSF, RSH, RSW} from '../../string/AppDimension.js';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles.js';
import {useTheme} from '../../theme/ThemeProvider.js';

export default function All_Admission({navigation, route}) {
  const {themeColor} = useTheme();

  const styles = getStyle(themeColor);

  return (
    <View style={styles.contsiner}>
      <HederCom
        text={'All Admission'}
        onPress={
          route.name === 'All_AdmissionDrawer'
            ? () => navigation.openDrawer()
            : () => navigation.goBack()
        }
        containerStyle={styles.header}
        TextStyle={{color: themeColor.text2}}
        IconStyle={{color: themeColor.text2}}
      />

      <ScrollView style={styles.list}>
        <View style={styles.scrollBody}>
          {Admission.map(e => (
            <Pressable
              key={Math.random()}
              onPress={() =>
                navigation.navigate('AdmissionWebView', {
                  name: e.name,
                  link: e.Link,
                })
              }
              style={styles.btn}>
              <Text style={styles.btnText}>{e.name}</Text>
              <MaterialCommunityIcons
                name="chevron-double-right"
                size={RSF(3)}
                color={themeColor.text}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const getStyle = ({bg, text2, box}) =>
  StyleSheet.create({
    contsiner: {
      backgroundColor: bg,
      flex: 1,
    },
    list: {
      marginHorizontal: RSH(1),
      marginTop: RSH(1),
    },
    btn: {
      flexDirection: 'row',
      height: RSH(12),
      backgroundColor: box,
      marginVertical: RSW(1),
      borderRadius: RSF(1),
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: RSW(1),
      paddingHorizontal: RSH(1),
      ...GlobalStyles.Shadow,
      elevation: RSF(0.7),
      width: RSW(95),
    },
    btnText: {
      fontFamily: FontName.Roboto_Bold,
      fontSize: RSF(2),
      color: text2,
      width: RSW(70),
    },
    scrollBody: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      backgroundColor: box,
      paddingBottom: RSF(1.5),
      ...GlobalStyles.Shadow,
      elevation: 1,
    },
  });
