import {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemesContext} from '../contex/ThemeContext.js';
import {darkColor, lightColor} from './thwme.colors.js';

// Using For withOut function
export let dark;

export const useTheme = () => {
  const {colorMode, setColorMode} = useContext(ThemesContext);
  const [storeMode, setStoreMode] = useState(colorMode);

  const setStore = async () => {
    await AsyncStorage.setItem(
      '@app-db-color-mode',
      colorMode === 'dark' ? 'light' : 'dark',
    );
  };

  const toggleSwitch = async () => {
    await setColorMode(prev => (prev === 'dark' ? 'light' : 'dark'));
    await setStore();
  };

  useEffect(() => {
    getStore();
  }, [colorMode]);

  const getStore = async () => {
    const data = await AsyncStorage.getItem('@app-db-color-mode');
    setStoreMode(data);
  };

  const isDark = storeMode === 'dark';
  dark = isDark;
  const themeColor = isDark ? darkColor : lightColor;

  return {toggleSwitch, isDark, themeColor};
};
