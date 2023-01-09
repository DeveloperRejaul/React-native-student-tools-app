import {Dimensions} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const responsiveDimension = {
  RSH: responsiveScreenHeight,
  RSW: responsiveScreenWidth,
  RSF: responsiveScreenFontSize,
};

export const {RSF, RSH, RSW} = responsiveDimension;
export const {height, width} = Dimensions.get('window');
