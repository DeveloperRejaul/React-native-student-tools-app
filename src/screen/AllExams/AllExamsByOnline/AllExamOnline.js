import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import ImgPhath from '../../../string/ImgPhath.js';
import BoxCom from '../../../components/BoxCom.js';
import {GlobalStyles} from '../../../GlobalStyles/GlobalStyles.js';
import {AllExamOnlineAllData} from './AllExamOnlineAllData.js';
import {useTheme} from '../../../theme/ThemeProvider.js';
import {RSF, RSH} from '../../../string/AppDimension.js';

export default function AllExamOnline({navigation}) {
  const {isDark, themeColor} = useTheme();
  const styles = getStyle(themeColor);

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[GlobalStyles.Items, styles.Grid]}>
            {AllExamOnlineAllData.map(e => (
              <BoxCom
                key={Math.random()}
                BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
                text={e.text}
                source={ImgPhath.PSCLOGO}
                TextStyle={styles.text}
                imgStyle={styles.img}
                onPress={() =>
                  navigation.navigate('AllExamOnlineWebView', {
                    link: e.link,
                    name: e.text,
                  })
                }
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const getStyle = ({bg, text2, box}) =>
  StyleSheet.create({
    body: {
      backgroundColor: bg,
      flex: 1,
    },
    container: {
      marginHorizontal: RSF(1),
    },
    btn: {
      backgroundColor: box,
      ...GlobalStyles.Shadow,
    },
    Grid: {
      marginTop: RSH(2),
      paddingBottom: RSH(5),
    },
    text: {
      fontSize: RSF(2),
      color: text2,
    },
    img: {
      height: RSH(8),
      width: RSH(8),
      marginBottom: RSF(0.8),
      borderRadius: RSF(0.5),
    },
  });
