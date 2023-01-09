import {StyleSheet} from 'react-native';
import {Colors} from '../string/AppColors.js';
import {height, width, RSF, RSH, RSW} from '../string/AppDimension.js';
import {dark} from '../theme/ThemeProvider.js';

export const GlobalStyles = StyleSheet.create({
  Items: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnGrid: {
    backgroundColor: Colors.Box_bg,
    width: width / 2 - 20,
    height: height / 5,
  },
  btnList: {
    backgroundColor: Colors.white,
    width: width - 20,
    height: height / 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: RSF(2),
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: RSF(1),
  },
});
