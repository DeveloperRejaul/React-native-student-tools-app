import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import {RSF, RSH, RSW} from '../../string/AppDimension.js';
import BoxCom from '../../components/BoxCom.js';
import {Ionicons} from '../../string/AppIcon.js';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles.js';
import FontName from '../../string/FontName.js';
import {openUrlFnc} from '../../helperFnc/LinkingUrl.js';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../theme/ThemeProvider.js';
import {useDrawerStatus} from '@react-navigation/drawer';

export default function HomeScreen() {
  const navigation = useNavigation();
  const {themeColor, isDark} = useTheme();
  const styles = getStyles(themeColor);
  const isOpen = useDrawerStatus() === 'open';

  return (
    <View style={styles.body}>
      <StatusBar
        backgroundColor={
          isOpen & isDark
            ? '#18181b'
            : isOpen & !isDark
            ? '#1ad399'
            : !isOpen & isDark
            ? '#222227'
            : themeColor.bg
        }
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />

      <View style={styles.container}>
        <Pressable
          style={styles.BarStyle}
          onPress={() => navigation.toggleDrawer()}>
          <Ionicons
            style={styles.barsIcon}
            name="ios-menu"
            size={50}
            color={themeColor.text}
          />
        </Pressable>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.ListScroll}>
            <View style={styles.title}>
              <Text style={styles.titleText}>Tools</Text>
              <Text style={styles.titleText2}>Simple and easy to use app</Text>
            </View>
            <View style={GlobalStyles.Items}>
              <BoxCom
                onPress={() => navigation.navigate('AllResult')}
                MaterialCommunityIconsName="clipboard-text-search-outline"
                text={'All Exams Result'}
                BtnStyle={[GlobalStyles.btnGrid, styles.box]}
                TextStyle={styles.boxText}
                iconStyle={styles.icon}
              />
              <BoxCom
                onPress={() => navigation.navigate('GradeScreen')}
                IoniconsIconName={'calculator'}
                text={'Grade Claculator'}
                BtnStyle={[GlobalStyles.btnGrid, styles.box]}
                TextStyle={styles.boxText}
                iconStyle={styles.icon}
              />
              <BoxCom
                onPress={() => navigation.navigate('All_Admission')}
                IoniconsIconName={'logo-buffer'}
                text={'All Admission'}
                BtnStyle={[GlobalStyles.btnGrid, styles.box]}
                TextStyle={styles.boxText}
                iconStyle={styles.icon}
              />
              <BoxCom
                onPress={() => navigation.navigate('Notice')}
                IoniconsIconName="notifications-outline"
                text={'All Notice'}
                BtnStyle={[GlobalStyles.btnGrid, styles.box]}
                TextStyle={styles.boxText}
                iconStyle={styles.icon}
              />
              <BoxCom
                // onPress={() => {
                //   openUrlFnc('geo:37.484847,-122.148386');
                // }}
                OcticonsIconNam="star-fill"
                text={'Rating Us '}
                BtnStyle={[GlobalStyles.btnGrid, styles.box]}
                TextStyle={styles.boxText}
                iconStyle={styles.icon}
              />
              <BoxCom
                onPress={() => {
                  openUrlFnc(
                    'https://play.google.com/store/apps/dev?id=7721085576223233782',
                  );
                }}
                OcticonsIconNam={'apps'}
                text={'Our More App'}
                BtnStyle={[GlobalStyles.btnGrid, styles.box]}
                TextStyle={styles.boxText}
                iconStyle={styles.icon}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const getStyles = ({bg, text2, Icon}) =>
  StyleSheet.create({
    body: {
      backgroundColor: bg,
      flex: 1,
    },
    container: {
      marginHorizontal: RSW(2),
    },
    box: {
      backgroundColor: bg,
      ...GlobalStyles.Shadow,
    },
    boxText: {
      color: text2,
    },
    title: {
      height: RSH(100) / 5,
    },
    title2: {
      height: RSH(100) / 7,
    },
    titleText: {
      fontSize: RSF(5),
      color: text2,
      fontFamily: FontName.LeagueSpartan_Bold,
    },
    titleText2: {
      fontSize: RSF(2.5),
      color: text2,
      fontFamily: FontName.Poppins_Bold,
    },
    BarStyle: {
      alignSelf: 'flex-start',
    },
    barsIcon: {
      marginTop: RSH(1),
      // transform: [{rotate: '180deg'}],
    },
    ListScroll: {
      paddingBottom: RSH(10),
    },
    icon: {
      color: Icon,
    },
  });
