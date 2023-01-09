import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../../string/AppColors.js';
import FontName from '../../string/FontName.js';
import HederCom from '../../components/HederCom.js';
import AllOfflineResult from '../../screen/AllExams/All Exams Oflfine/AllOfflineResult.js';
import AllExamOnline from '../../screen/AllExams/AllExamsByOnline/AllExamOnline.js';
import {useTheme} from '../../theme/ThemeProvider.js';

const Tab = createMaterialTopTabNavigator();

export default function ResultTopTabRoute({navigation, route}) {
  const {themeColor} = useTheme();

  return (
    <>
      <HederCom
        text={`All Exams Result`}
        TextStyle={{color: themeColor.text2}}
        IconStyle={{color: themeColor.text2}}
        containerStyle={{backgroundColor: themeColor.bg}}
        onPress={
          route.name === 'AllResult'
            ? () => navigation.goBack()
            : () => navigation.openDrawer()
        }
      />

      <Tab.Navigator
        initialRouteName="Online"
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 17,
            fontFamily: FontName.Poppins_Bold,
          },
          tabBarStyle: {backgroundColor: themeColor.bg},
          tabBarIndicatorStyle: {
            backgroundColor: themeColor.text,
            height: 2,
          },
        }}>
        <Tab.Screen
          name="Online"
          component={AllExamOnline}
          options={{
            tabBarLabel: 'Online',
            tabBarLabelStyle: {
              fontFamily: FontName.Poppins_Bold,
              fontSize: 20,
              color: themeColor.text2,
            },
          }}
        />
        <Tab.Screen
          name="Offline"
          component={AllOfflineResult}
          options={{
            tabBarLabel: 'Offline',
            tabBarLabelStyle: {
              fontFamily: FontName.Poppins_Bold,
              fontSize: 20,
              color: themeColor.text2,
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
