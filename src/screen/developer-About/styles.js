import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider.js';
import {RSF, RSH, RSW} from '../../string/AppDimension.js';
import FontName from '../../string/FontName.js';

export default function useCostomStyle() {
  const {themeColor} = useTheme();
  const {bg, text2} = themeColor;

  const style = StyleSheet.create({
    container: {
      backgroundColor: bg,
      flex: 1,
    },
    imageBody: {
      alignItems: 'center',
      marginTop: RSH(1),
      paddingVertical: RSH(1),
    },
    image: {
      height: RSH(7),
      width: RSH(7),
      borderRadius: RSF(1),
    },
    imageText: {
      color: text2,
      fontSize: RSF(4),
      fontFamily: FontName.LeagueSpartan_Regular,
    },
    text: {
      color: themeColor.text2,
    },
    body: {
      paddingHorizontal: RSW(4),
    },
    title: {fontSize: RSF(2.1), fontFamily: FontName.Roboto_Bold, color: text2},
    titleText: {
      fontSize: RSF(2),
      fontFamily: FontName.Roboto_Regular,
      textAlign: 'justify',
      color: text2,
    },
  });

  return {style};
}
