import {Text, View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../string/AppColors.js';
import ButtonCom from './ButtonCom.js';
import AleartCom from './AleartCom.js';
import {styles} from '../screen/Grade/styles.js';
import {useTheme} from '../theme/ThemeProvider.js';
import {RSH} from '../string/AppDimension.js';

export default function GpaNameSubNoCom({
  onPress,
  alert,
  handelAlert,
  handelOk,
  handelCencle,
  handleCreateSub,
  createSubject,
  yourName,
  handleYourName,
  palaholder,
}) {
  const {themeColor} = useTheme();
  const myStyle = getStyle(themeColor);

  return (
    <View>
      <Text style={[styles.TextTitle, myStyle.title]}>
        Only For National University
      </Text>

      <View style={styles.textInputAline}>
        {/* textinput coute total subject */}
        <View style={{marginBottom: RSH(1)}}>
          <Text style={[styles.lable, myStyle.lable]}>
            Inter Your Name
            <Text style={myStyle.require}>(Not required)</Text>
          </Text>
          <TextInput
            value={yourName}
            onChangeText={handleYourName}
            keyboardType="default"
            placeholder="Your Name Here"
            maxLength={20}
            style={[
              styles.textInput,
              {
                backgroundColor: themeColor.input,
              },
            ]}
          />
        </View>

        <View>
          <Text style={[styles.lable, myStyle.lable]}>
            Inter Your Total number of {palaholder}
            <Text style={myStyle.require}>(Required)</Text>
          </Text>
          <TextInput
            value={createSubject}
            onChangeText={handleCreateSub}
            keyboardType="number-pad"
            placeholder={`Total Number of ${palaholder}`}
            maxLength={2}
            style={[
              styles.textInput,
              {
                backgroundColor: themeColor.input,
              },
            ]}
          />
        </View>

        {/* Button for Create object */}
        <ButtonCom
          text={'Create'}
          onPress={onPress}
          style={[styles.createBtn, myStyle.btn]}
          textStyle={[styles.createBtnText, myStyle.text]}
          MaterialCommunityIconsName="view-grid-plus-outline"
          IconColor={themeColor.Icon}
        />

        {/* Alert Component  */}
        {alert && (
          <AleartCom
            state={alert}
            handelAlert={handelAlert}
            OK={handelOk}
            Cencle={handelCencle}
            bodyText={
              createSubject >= 16
                ? 'Pleace Input 15 less that value'
                : createSubject == null
                ? 'Plece FillUp the Input With Number Value'
                : createSubject.match(/\D/)
                ? 'Pleae Input number value'
                : null
            }
          />
        )}
      </View>
    </View>
  );
}

const getStyle = ({text2, box, worning}) =>
  StyleSheet.create({
    title: {color: text2},
    lable: {color: text2},
    require: {color: worning},
    btn: {backgroundColor: box, borderWidth: 0},
    text: {color: text2},
  });
