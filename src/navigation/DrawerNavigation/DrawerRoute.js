import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../../components/CustomDrawer.js';
import {
  AppAbout,
  GradeScreen,
  All_Admission,
  AboutUs,
  Home,
} from '../../screen/index.js';
import {Ionicons, MaterialCommunityIcons} from '../../string/AppIcon.js';
import ResultTopTabRoute from '../../navigation/TopTabRote/ResultTopTabRoute.js';
import {RSF} from '../../string/AppDimension.js';
import {useTheme} from '../../theme/ThemeProvider.js';
import FontName from '../../string/FontName.js';

export default function MyDrawer() {
  const Drawer = createDrawerNavigator();
  const {themeColor} = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: themeColor.GrawerActiveBg,
        drawerInactiveBackgroundColor: themeColor.bg,
        drawerType: 'slide',
        overlayColor: 'transparent',

        drawerLabelStyle: {
          color: themeColor.text,
          fontSize: RSF(2),
          fontFamily: FontName.Poppins_Regular,
          lineHeight: RSF(2.4),
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* Home */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Ionicons
              color={themeColor.text}
              name={focused ? 'home' : 'home-outline'}
              size={RSF(3)}
            />
          ),
        }}
      />

      {/* All Exam Result*/}
      <Drawer.Screen
        name="AllExamResultDrawer"
        component={ResultTopTabRoute}
        options={{
          headerShown: false,
          title: 'All Exams Result',
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? 'clipboard-text-search-outline'
                  : 'clipboard-text-search-outline'
              }
              size={RSF(3)}
              color={themeColor.text}
            />
          ),
        }}
      />

      {/* Grade Calculator */}
      <Drawer.Screen
        name="GradeScreenDrawer"
        component={GradeScreen}
        options={{
          headerShown: false,
          title: 'Grade Calculator',
          drawerIcon: ({focused}) => (
            <Ionicons
              color={themeColor.text}
              name={focused ? 'calculator' : 'calculator'}
              size={RSF(3)}
            />
          ),
        }}
      />

      {/* All Admission*/}
      <Drawer.Screen
        name="All_AdmissionDrawer"
        component={All_Admission}
        options={{
          headerShown: false,
          title: 'All Admission',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              color={themeColor.text}
              name={focused ? 'logo-buffer' : 'logo-buffer'}
              size={RSF(3)}
            />
          ),
        }}
      />

      {/* About */}
      <Drawer.Screen
        name="AppAboutDrawer"
        component={AppAbout}
        options={{
          headerShown: false,
          title: 'App About',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              color={themeColor.text}
              name={
                //  IoniconsIconName={'information-circle'}
                focused ? 'information-circle' : 'information-circle'
              }
              size={RSF(3)}
            />
          ),
        }}
      />

      {/* About US */}
      <Drawer.Screen
        name="AboutUsDrawer"
        component={AboutUs}
        options={{
          headerShown: false,
          title: 'About Us',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              color={themeColor.text}
              name={
                focused
                  ? 'information-circle-outline'
                  : 'information-circle-outline'
              }
              size={RSF(3)}
            />
          ),
        }}
      />
      {/* Settings */}
      {/* <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Ionicons    

          color={themeColor.text}   
              name={focused ? 'settings' : 'settings-outline'}
               size={RSF(3)}
             
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}
