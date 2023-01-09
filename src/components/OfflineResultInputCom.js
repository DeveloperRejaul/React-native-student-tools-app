import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import {height, width} from '../string/AppDimension.js';
import {Colors} from '../string/AppColors.js';
import FontName from '../string/FontName.js';
import {Ionicons} from '../string/AppIcon.js';
import ButtonCom from './ButtonCom.js';
import {Context} from '../contex/contex.js';
import {sendSms} from '../helperFnc/sendSmsFun.js';
import SmsBody from '../Helper-Classes/OfflineSmsBody.js';

export default function AleartCom({visible, input1, input2, title, board}) {
  const {setVisible, setInput1, setInput2, setBoard} = useContext(Context);
  const nuData = title.text.slice(0, 2);
  //
  const number = '16222';
  const smsBody = new SmsBody(board, input2, input1);

  const HandelSmsData = () => {
    if (title.text === 'PSC') sendSms(number, smsBody.PSC());
    if (title.text === 'JSC') sendSms(number, smsBody.JSC());
    if (title.text === 'SSC') sendSms(number, smsBody.SSC());
    if (title.text === 'HSC') sendSms(number, smsBody.HSC());
    if (title.text === 'NU Honours 1st Year') sendSms(number, smsBody.H1());
    if (title.text === 'NU Honours 2nd Year') sendSms(number, smsBody.H2());
    if (title.text === 'NU Honours 3rd Year') sendSms(number, smsBody.H3());
    if (title.text === 'NU Honours 4th Year') sendSms(number, smsBody.H4());

    setVisible(false);
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType={'fade'}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.Container}>
        <View style={styles.innerModel}>
          <View style={styles.Title}>
            <View style={styles.titleText}>
              <Text style={styles.taiteText}>{title.text} Result</Text>
            </View>
            <Pressable
              style={styles.modelClose}
              onPress={() => setVisible(false)}>
              <Ionicons name="close" size={28} color={Colors.Font_C} />
            </Pressable>
          </View>
          <View style={styles.body}>
            {nuData === 'NU' || (
              <View style={[styles.InputBody, {marginBottom: 10}]}>
                <Text style={styles.inputLable}>
                  {title.items == 3
                    ? 'Input Year and Board'
                    : 'Input Passing Year'}
                </Text>

                <View
                  style={[
                    title.items == 3 ? styles.InputBodyJSC : styles.InputBody,
                  ]}>
                  <TextInput
                    style={[title.items == 3 ? styles.inputJSC : styles.input]}
                    placeholder={'Year'}
                    keyboardType="decimal-pad"
                    value={input1}
                    onChangeText={value => setInput1(value)}
                    maxLength={4}
                  />
                  {title && title.items == 3 ? (
                    <TextInput
                      style={[
                        title.items == 3 ? styles.inputJSC : styles.input,
                      ]}
                      placeholder={'Board'}
                      value={board.toUpperCase()}
                      onChangeText={value => setBoard(value)}
                      maxLength={3}
                    />
                  ) : null}
                </View>
              </View>
            )}
            <View style={styles.InputBody}>
              <Text style={styles.inputLable}> Input Your Roll No </Text>
              <TextInput
                style={styles.input}
                placeholder={'Input Roll No'}
                keyboardType="decimal-pad"
                value={input2}
                onChangeText={value => setInput2(value)}
              />
            </View>

            <ButtonCom
              text="Send"
              IoniconsName={'send'}
              IconColor={Colors.Card_bg}
              textStyle={styles.sendText}
              style={styles.sendBody}
              onPress={HandelSmsData}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00000099',
  },
  innerModel: {
    height: height / 2.5,
    width: width / 1.2,
    backgroundColor: '#FEFBF6',
    borderRadius: 10,
  },
  Title: {
    backgroundColor: Colors.StatasBar,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    padding: 5,
    height: '15%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  taiteText: {
    fontSize: 20,
    fontFamily: FontName.LeagueSpartan_Bold,
    textAlign: 'center',
    color: Colors.Font_C,
  },
  body: {
    paddingHorizontal: 10,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputBody: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    height: 40,
    borderColor: Colors.bg_B,
    fontSize: 18,
  },
  inputLable: {
    fontSize: 18,
    color: Colors.Font_C,
    textAlign: 'left',
  },
  sendBody: {
    marginBottom: -60,
    marginTop: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green,
    paddingHorizontal: 10,
    borderRadius: 8,
    flexDirection: 'row-reverse',
  },
  sendText: {
    fontSize: 18,
    marginRight: 5,
    fontFamily: FontName.Ubuntu_Bold,
    color: Colors.Card_bg,
  },
  titleText: {
    width: '89%',
  },
  modelClose: {
    width: '10%',
    backgroundColor: Colors.white,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputJSC: {
    borderWidth: 1,
    width: '45%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    height: 40,
    borderColor: Colors.bg_B,
    fontSize: 18,
  },
  InputBodyJSC: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
});
