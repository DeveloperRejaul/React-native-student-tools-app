import {StyleSheet, View, Modal} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import HederCom from '../HederCom.js';
import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import {RSH, RSW} from '../../string/AppDimension.js';

export default function WebCom({link, text}) {
  const navigation = useNavigation();

  const [load, setLoad] = useState(true);

  return (
    <>
      <HederCom
        containerStyle={styles.header}
        text={text}
        onPress={() => navigation.goBack()}
      />

      <WebView source={{uri: link}} onLoadEnd={() => setLoad(false)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={load}
        onRequestClose={() => setLoad(false)}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: RSH(100),
            width: RSW(100),
          }}>
          <Lottie
            source={require('../../animation/109970-swimming.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  header: {},
  lottie: {
    height: RSH(20),
    width: RSH(20),
  },
});
