import {Linking, Alert} from 'react-native';

export const openUrlFnc = async url => {
  const isSupported = await Linking.canOpenURL(url);
  if (isSupported) {
    await Linking.openURL(url);
  } else {
    Alert.alert('Worning', `Don't know how to open this url ${url}`, [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK'},
    ]);
  }
};
