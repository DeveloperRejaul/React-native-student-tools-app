import {StyleSheet, View, Text, Pressable} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {RSF, RSH, RSW} from '../../string/AppDimension.js';
import {notice} from './noticeAllData.js';
import {MaterialCommunityIcons} from '../../string/AppIcon.js';
import FontName from '../../string/FontName.js';
import {useTheme} from '../../theme/ThemeProvider.js';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles.js';

export default function Notice({navigation}) {
  const {themeColor} = useTheme();
  const styles = getStyle(themeColor);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.scrollBody}>
            {notice.map(e => (
              <Pressable
                key={Math.random()}
                style={styles.btnView}
                onPress={() =>
                  navigation.navigate('Notice-webView', {
                    link: e.url,
                    name: e.name,
                  })
                }>
                <Text style={styles.btnText}>{e.name}</Text>
                <MaterialCommunityIcons
                  name="chevron-double-right"
                  size={RSF(4)}
                  color={themeColor.text2}
                />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const getStyle = ({bg, text2, box}) =>
  StyleSheet.create({
    container: {
      backgroundColor: bg,
      flex: 1,
    },
    body: {
      marginHorizontal: RSH(1),
      marginTop: RSH(1),
    },
    btnView: {
      flexDirection: 'row',
      width: RSW(100) - 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: RSH(1),
      paddingVertical: RSW(2),
      backgroundColor: box,
      marginVertical: RSW(1),
      borderRadius: RSF(1),

      height: RSH(12),
      ...GlobalStyles.Shadow,
      elevation: 1,
    },
    btnText: {
      color: text2,
      fontSize: RSF(2.2),
      fontFamily: FontName.Roboto_Bold,
      textAlign: 'center',
      width: RSW(80),
    },
    scrollBody: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: RSH(3),
    },
  });
