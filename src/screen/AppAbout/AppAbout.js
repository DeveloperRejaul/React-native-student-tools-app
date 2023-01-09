import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import HederCom from '../../components/HederCom.js';
import {useTheme} from '../../theme/ThemeProvider.js';
import {RSF, RSH, RSW} from '../../string/AppDimension.js';
import {aboutString} from './about.string.js';
import ImgPhath from '../../string/ImgPhath.js';
import FontName from '../../string/FontName.js';

export default function AppAbout({navigation, route}) {
  const {themeColor} = useTheme();
  const {bg, box, text, text2} = themeColor;

  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>
      <HederCom
        onPress={() => navigation.openDrawer()}
        text="App About"
        containerStyle={{backgroundColor: box}}
        TextStyle={{color: text2}}
        IconStyle={{color: text}}
      />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageBody}>
            <Image source={ImgPhath.AppIcon} style={styles.image} />
            <Text style={styles.imageText}>Student Tools</Text>

            <View>
              {aboutString.map(e => (
                <View key={Math.random()}>
                  {/* Introdacton Part */}
                  <View style={styles.catagoryBody}>
                    <Text style={styles.introTitle}>{e.Title}</Text>
                    <Text style={styles.introText}>{e.text}</Text>
                  </View>

                  {/* Catagory Of Result */}
                  <View style={styles.catagoryBody}>
                    <Text style={styles.introTitle}>
                      {e.catagory.ResultTitle}
                    </Text>
                    {e.catagory.ResultsCatagory.map(cata => (
                      <Text style={styles.introText} key={Math.random()}>
                        {cata}
                      </Text>
                    ))}
                  </View>

                  {/* Catagory Of Grade */}
                  <View style={styles.catagoryBody}>
                    <Text style={styles.introTitle}>
                      {e.catagory.GradeTitle}
                    </Text>
                    {e.catagory.GraeCatagory.map(grad => (
                      <Text key={Math.random()} style={styles.introText}>
                        {grad}
                      </Text>
                    ))}
                  </View>

                  {/* Catagory Of Notice */}
                  <View style={styles.catagoryBody}>
                    <Text style={styles.introTitle}>
                      {e.catagory.NoticeTitle}
                    </Text>
                    {e.catagory.NoticeCatagory.map(notice => (
                      <Text key={Math.random()} style={styles.introText}>
                        {notice}
                      </Text>
                    ))}
                  </View>

                  {/* Catagory Of Notice */}
                  <View style={styles.catagoryBody}>
                    <Text style={styles.introTitle}>
                      {e.catagory.AdmissionTitle}
                    </Text>
                    {e.catagory.AdmissionCatagory.map(admission => (
                      <Text key={Math.random()} style={styles.introText}>
                        {admission}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const getStyles = ({bg, box, text, text2}) =>
  StyleSheet.create({
    container: {
      backgroundColor: bg,
      flex: 1,
    },
    text: {color: text2},
    body: {marginHorizontal: RSW(1)},
    imageBody: {
      alignItems: 'center',
      marginTop: RSH(1),
      paddingVertical: RSH(1),
      paddingBottom: RSH(10),
    },
    image: {
      height: RSH(7),
      width: RSH(7),
      borderRadius: RSF(1),
    },
    catagoryTitle: {
      fontSize: RSF(2),
      color: text2,
    },
    introTitle: {
      fontSize: RSF(2.1),
      color: text2,
      fontFamily: FontName.Roboto_Bold,
    },
    introText: {
      fontSize: RSF(2),
      color: text2,
    },
    catagoryBody: {marginBottom: RSH(2)},
    imageText: {
      fontFamily: FontName.Righteous_Regular,
      marginBottom: RSH(1),
      fontSize: RSF(2.5),
      color: text2,
    },
  });
