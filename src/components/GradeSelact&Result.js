import {Text, View, TextInput, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from '../screen/Grade/styles.js';
import ButtonCom from './ButtonCom.js';
import DropDown from './DropDown.js';
import ResultCom from './GpaResultCom.js';
import AleartCom from './AleartCom.js';
import {useTheme} from '../theme/ThemeProvider.js';
import {color} from 'react-native-reanimated';
import {RSF} from '../string/AppDimension.js';

export default function GradeSelactResult({
  alert,
  CollectPrentData,
  handleTextInput,
  handelResult,
  Inpute,
  resultModel,
  handelModelColose,
  Gpa,
  yourName,
  handelAlert,
  handelOk,
  handelCencle,
  Cgpa,
}) {
  const {themeColor} = useTheme();
  const myStyles = getStyles(themeColor);

  return (
    <View>
      <View style={styles.RowAline}>
        <Text style={[styles.title, myStyles.title]}>Course</Text>
        <Text style={[styles.title, myStyles.title]}>Grade</Text>
        <Text style={[styles.title, myStyles.title]}>Credit</Text>
      </View>
      {/* Alert Component */}
      {alert && (
        <AleartCom
          state={alert}
          handelAlert={handelAlert}
          OK={handelOk}
          Cencle={handelCencle}
          bodyText="Place FillUp Garad"
        />
      )}

      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scroll}>
            {/* All Row  */}
            {Inpute.map((e, i) => (
              <View key={i} style={[styles.RowAline, styles.mt]}>
                {/* Subject Culams */}
                <Text style={[styles.subject, myStyles.subject]}>
                  {Cgpa ? 'Cemesters' : 'Subject'} {i + 1}
                </Text>

                {/* Grade */}

                <DropDown
                  CollectPrentData={CollectPrentData}
                  id={i + 1}
                  Cgpa={Cgpa}
                />

                {/* Credit */}
                <TextInput
                  keyboardType="decimal-pad"
                  style={[styles.credit, myStyles.credit]}
                  defaultValue={'4'}
                  value={e.value}
                  onChangeText={handleTextInput}
                  placeholderTextColor={'#433a513d'}
                />
              </View>
            ))}

            {/* Calculate Button */}
            <View style={[styles.btnBody]}>
              <ButtonCom
                text="Calculate"
                style={[styles.caculateBtn, myStyles.caculateBtn]}
                textStyle={[styles.btnText, myStyles.text]}
                onPress={handelResult}
                MaterialCommunityIconsName="calculator-variant"
                IconSize={RSF(3)}
                IconColor={themeColor.Icon}
              />
            </View>
          </View>
        </ScrollView>

        {/* Result Model */}
        {resultModel && (
          <ResultCom
            handelModelColose={handelModelColose}
            resultModel={resultModel}
            Gpa={Gpa}
            name={yourName}
          />
        )}
      </View>
    </View>
  );
}

const getStyles = ({text, text2, box, bg}) =>
  StyleSheet.create({
    title: {
      color: text2,
      backgroundColor: bg,
    },
    subject: {
      color: text2,
    },
    credit: {
      color: text2,
    },
    caculateBtn: {
      backgroundColor: box,
    },
    text: {
      color: text2,
    },
  });
