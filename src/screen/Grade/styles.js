import {StyleSheet} from 'react-native';
import {Colors} from '../../string/AppColors.js';
import FontName from '../../string/FontName.js';
import {RSF, RSH, RSW} from '../../string/AppDimension.js';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  contaier: {marginHorizontal: RSW(1), marginTop: RSH(1)},
  RowAline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: RSF(2),
    fontFamily: FontName.Poppins_Bold,
    borderWidth: 1,
    width: RSW(32),
    textAlign: 'center',
  },
  ml: {
    marginLeft: RSH(1),
  },
  mt: {
    marginTop: RSH(1),
  },
  credit: {
    marginRight: RSW(1),
    borderWidth: 1,
    width: RSW(100) / 5,
    fontSize: RSF(1.7),
    height: RSH(3),
    padding: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  subject: {
    borderWidth: 1,
    width: RSW(100) / 3.6,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: RSW(3),
    marginLeft: RSW(0.5),
  },
  addBtnBody: {
    width: RSW(100) / 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: RSH(1.5),
    borderColor: Colors.green,
    borderRadius: 15,
    paddingVertical: RSH(0.5),
  },
  addBtnText: {color: Colors.green, fontSize: 15},
  scroll: {
    paddingBottom: RSH(12),
  },
  btnBody: {
    marginHorizontal: RSW(1),
    marginTop: RSH(1),
    // justifyContent: 'center',
    alignItems: 'center',
  },

  Modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  result: {
    width: RSW(100) - 30,
    height: RSH(100) / 1.8,
    borderRadius: 10,
    padding: RSF(20),
  },
  caculateBtn: {
    width: RSW(100) / 2,
    borderRadius: 5,
    marginTop: RSH(1),
  },
  btnText: {
    fontSize: RSF(2.5),
    fontWeight: '600',
    fontFamily: FontName.Ubuntu_Bold,
    marginLeft: RSW(0.7),
  },
  textInput: {
    marginBottom: RSH(1),
    borderRadius: 8,
    height: RSH(4.5),
    fontSize: RSF(2.5),
    paddingHorizontal: RSW(1),
    paddingVertical: RSW(0.5),
    width: RSW(100) / 1.2,
  },
  createBtn: {
    marginTop: RSH(2),
    width: RSW(100) / 2,
    height: RSH(4),
    borderRadius: 7,
  },
  createBtnText: {
    fontSize: RSF(2.5),
    fontFamily: FontName.Ubuntu_Bold,
    marginLeft: 7,
  },
  lable: {
    fontSize: RSF(1.5),
    marginBottom: RSH(0.3),
    fontFamily: FontName.Roboto_Regular,
    textAlign: 'center',
  },
  progress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closBtn: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: RSW(3.5),
    height: RSH(3.5),
    padding: 2,
  },
  hiMessage: {
    fontSize: RSF(4),
    fontFamily: FontName.SecularOne_Regular,
  },
  name: {
    fontSize: RSF(2.5),
    alignSelf: 'center',
    marginLeft: RSW(1),
    fontFamily: FontName.Roboto_Bold,
  },
  witch: {
    fontSize: RSF(2),
    color: Colors.Font_C,
    fontFamily: FontName.Ubuntu_Medium,
  },
  Wow: {
    fontSize: RSF(2.3),
    marginRight: RSW(0.4),
    fontFamily: FontName.Righteous_Regular,
  },
  subtitle: {
    fontSize: RSF(2.3),
    padding: 0,
    margin: 0,
    color: Colors.Card_bg,
    fontFamily: FontName.Ubuntu_Bold,
  },
  progressValue: {
    margin: 0,
    padding: 0,
  },
  textInputAline: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RSW(1.5),
    paddingVertical: RSW(3.5),
    borderRadius: 5,
  },
  TextTitle: {
    textAlign: 'center',
    fontSize: RSF(2.5),
    paddingVertical: 2,
    paddingHorizontal: RSW(1),
    marginBottom: RSH(20),
    borderRadius: 5,
    fontFamily: FontName.Poppins_Bold,
  },
});
