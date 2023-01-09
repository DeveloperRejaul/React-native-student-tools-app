import {StyleSheet} from 'react-native';

import {RSF, RSH} from '../../string/AppDimension.js';
import FontName from '../../string/FontName.js';
import {useTheme} from '../../theme/ThemeProvider.js';

export default function useStyle() {
  const {themeColor} = useTheme();
  const {bg, text2, text} = themeColor;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bg,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      height: RSH(10),
      width: RSH(10),
    },
    img_text: {
      fontSize: RSF(2.5),
      fontFamily: FontName.Poppins_Bold,
      color: text2,
    },
    logo_Aline: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return styles;
}
