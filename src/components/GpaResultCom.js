import {Text, View, Modal, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

import {styles} from '../screen/Grade/styles.js';
import {Ionicons} from '../string/AppIcon.js';
import {Colors} from '../string/AppColors.js';
import {useTheme} from '../theme/ThemeProvider.js';
import {RSF, RSH, RSW} from '../string/AppDimension.js';
import FontName from '../string/FontName.js';

export default function ResultCom({resultModel, handelModelColose, Gpa, name}) {
  const {themeColor} = useTheme();
  const myStyle = getStyle(themeColor);
  const {text} = themeColor;

  return (
    <Modal
      visible={resultModel}
      animationType={'fade'}
      transparent
      onRequestClose={handelModelColose}>
      <View style={[styles.Modal]}>
        {/* Model Body */}
        <View style={myStyle.modelBody}>
          <Pressable
            style={{alignSelf: 'flex-end'}}
            onPress={handelModelColose}>
            <Ionicons name="ios-close" size={RSF(4)} color={text} />
          </Pressable>
          {/* Message Body */}
          <View style={{flex: 3, justifyContent: 'space-evenly'}}>
            {/* Meassage  */}
            <View>
              <View>
                <Text style={myStyle.hiMessage}>Hi!</Text>
                <Text style={myStyle.text}>{name}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[myStyle.text, {marginRight: RSW(2)}]}>
                  {Gpa >= 3 && `😱Wow!`}
                </Text>
                <Text style={myStyle.text}>
                  {Gpa >= 3
                    ? `Congrats you passed`
                    : Gpa >= 1
                    ? `Congrats you passed`
                    : 'Opps... You Failed'}
                </Text>
              </View>
            </View>
            {/* Progess Result */}
            <View style={{alignItems: 'center'}}>
              <CircularProgress
                value={Gpa}
                radius={120}
                showProgressValue={true}
                progressValueColor={text}
                activeStrokeColor={'#f39c12'}
                inActiveStrokeColor={'#9b59b6'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={20}
                activeStrokeWidth={45}
                maxValue={4.0}
                duration={1000}
                subtitle={'Total GPA'}
                subtitleStyle={styles.subtitle}
                progressValueStyle={styles.progressValue}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const getStyle = ({text2, bg, text}) =>
  StyleSheet.create({
    modelBody: {
      height: RSH(60),
      width: RSW(90),
      backgroundColor: bg,
      padding: RSF(2),
      borderRadius: RSF(1),
    },
    hiMessage: {
      fontSize: RSF(4),
      color: text2,
      fontFamily: FontName.Poppins_Bold,
    },
    text: {
      fontSize: RSF(2),
      color: text2,
      fontFamily: FontName.Poppins_Regular,
    },
  });
