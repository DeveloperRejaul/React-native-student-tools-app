import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Home,
  AllExamResult,
  All_Admission,
  AppAbout,
  AboutUs,
  Notice,
  NoticeWebView,
  AdmissionWebView,
  AllExamOnlineWebView,
  SplassScreen,
} from '../screen';

import MyDrawer from './DrawerNavigation/DrawerRoute.js';
import GradeTopTabRote from './TopTabRote/GradeTopTabRote.js';
import ResultTopTabRoute from './TopTabRote/ResultTopTabRoute.js';
import {Colors} from '../string/AppColors.js';
import FontName from '../string/FontName.js';
import {useTheme} from '../theme/ThemeProvider.js';

export default function AllStack() {
  const Stack = createNativeStackNavigator();

  const {themeColor} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={'SPLASS-SCREEN'}
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        component={MyDrawer}
        name="MyDrawer"
        options={{
          headerShown: false,
        }}
      />
      {/* Grade TopTab Grade Calculater */}
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Grade Calculator',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: themeColor.box,
          },
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: FontName.Roboto_Bold,
            color: themeColor.text2,
          },
          headerTintColor: themeColor.text2,
        }}
        name="GradeScreen"
        component={GradeTopTabRote}
      />
      {/* Result TopTab Route */}
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'All Eaxm Result',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.green,
          },
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: FontName.Roboto_Bold,
            color: Colors.Font_C,
          },
          headerTintColor: Colors.Font_C,
        }}
        name="AllResult"
        component={ResultTopTabRoute}
      />
      {/* Splass Screen Stack */}
      <Stack.Screen
        options={{
          headerShown: false,
          animation: 'slide_from_left',
        }}
        name="SPLASS-SCREEN"
        component={SplassScreen}
      />

      {/* Home Stack */}
      <Stack.Screen
        options={{
          headerShown: false,
          animation: 'slide_from_left',
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="AllExamOnline"
        component={AllExamResult}
        options={{
          headerShown: false,
        }}
      />
      {/* All Admission Stack */}
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'All Admission ',
          headerStyle: {
            backgroundColor: Colors.green,
          },
        }}
        name="All_Admission"
        component={All_Admission}
      />
      {/* App About Stack */}
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'App About',
          headerStyle: {
            backgroundColor: Colors.green,
          },
          headerTintColor: Colors.white,
        }}
        name="AppAbout"
        component={AppAbout}
      />

      {/* About Us */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AboutUs"
        component={AboutUs}
      />
      {/*Notice*/}
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: themeColor.box,
          },
          headerTitleStyle: {
            color: themeColor.text,
          },
          headerTintColor: themeColor.text,
        }}
        name="Notice"
        component={Notice}
      />
      {/* NuNotice */}
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '',
          },
        }}
        name="Notice-webView"
        component={NoticeWebView}
      />
      {/* AdmissionWebView */}
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.green,
          },
        }}
        name="AdmissionWebView"
        component={AdmissionWebView}
      />
      {/* AllExamOnlineWebView */}
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.green,
          },
        }}
        name="AllExamOnlineWebView"
        component={AllExamOnlineWebView}
      />
      {/* Splass Screen Stack */}
      <Stack.Screen
        options={{headerShown: false}}
        name="splass-screen"
        component={SplassScreen}
      />
    </Stack.Navigator>
  );
}
