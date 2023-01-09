import {Button} from 'react-native';
import React, {useCallback} from 'react';

export default LinkingNative = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button onPress={handlePress} title={children} />;
};
