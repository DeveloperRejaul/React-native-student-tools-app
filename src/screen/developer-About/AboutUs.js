import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import HederCom from '../../components/HederCom.js';
import {useTheme} from '../../theme/ThemeProvider.js';
import ImgPhath from '../../string/ImgPhath.js';
import useCustomStyle from './styles.js';
import {data} from './developer.string.js';

export default function AboutUs({navigation}) {
  const {themeColor} = useTheme();
  const {text2, text, box} = themeColor;
  const {style} = useCustomStyle();

  return (
    <View style={style.container}>
      <HederCom
        text={'About Us'}
        onPress={() => navigation.openDrawer()}
        containerStyle={{backgroundColor: box}}
        TextStyle={{color: text2}}
        IconStyle={{color: text}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.body}>
          <View>
            <View style={style.imageBody}>
              <Image source={ImgPhath.AppIcon} style={style.image} />
              <Text style={style.imageText}>Getsells</Text>
            </View>
          </View>

          {data.map(e => (
            <View key={Math.random()}>
              <Text style={style.title}>{e.title}</Text>
              <Text style={style.titleText}>{e.text}</Text>
              <Text style={style.title}>{e.title2}</Text>
              <Text style={style.titleText}>{e.text2}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
