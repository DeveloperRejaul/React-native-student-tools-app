import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import AllStack from './src/navigation/AllStack.js';
import {ThemesContext} from './src/contex/ThemeContext.js';
import {useColorScheme} from 'react-native';
import {View} from 'react-native-interactable';

export default function App() {
  const colorScheme = useColorScheme();
  const [colorMode, setColorMode] = React.useState(colorScheme);

  return (
    <NavigationContainer>
      <ThemesContext.Provider value={{colorMode, setColorMode}}>
        <AllStack />
      </ThemesContext.Provider>
    </NavigationContainer>
  );
}
