import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GPA from '../../screen/Grade/GPA.js';
import CGPA from '../../screen/Grade/CGPA.js';
import FontName from '../../string/FontName.js';
import HederCom from '../../components/HederCom.js';
import {useTheme} from '../../theme/ThemeProvider.js';

const Tab = createMaterialTopTabNavigator();

export default function TopTab({navigation, route}) {
  const {themeColor} = useTheme();
  const {bg, box, text2, text, Icon} = themeColor;

  return (
    <>
      {route.name == 'GradeScreenDrawer' && (
        <HederCom
          containerStyle={{backgroundColor: box}}
          onPress={() => navigation.openDrawer()}
          text={'Grade Calculater'}
          IconStyle={{color: text}}
          TextStyle={{color: text}}
        />
      )}

      <Tab.Navigator
        initialRouteName="GPA"
        screenOptions={{
          tabBarStyle: {backgroundColor: box},
          tabBarIndicatorStyle: {
            backgroundColor: text,
            height: 2,
          },
        }}>
        <Tab.Screen
          name="GPA"
          component={GPA}
          options={{
            tabBarLabel: 'GPA',
            tabBarLabelStyle: {
              fontFamily: FontName.Poppins_Bold,
              fontSize: 20,
              color: text2,
            },
          }}
        />
        <Tab.Screen
          name="CGPA"
          component={CGPA}
          options={{
            tabBarLabel: 'CGPA',
            tabBarLabelStyle: {
              fontFamily: FontName.Poppins_Bold,
              fontSize: 20,
              color: text2,
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
