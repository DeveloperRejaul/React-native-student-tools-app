import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import BoxCom from '../../../components/BoxCom.js';
import {GlobalStyles} from '../../../GlobalStyles/GlobalStyles.js';
import OfflineInputCom from '../../../components/OfflineResultInputCom.js';
import {Context} from '../../../contex/contex.js';
import ImgPhath from '../../../string/ImgPhath.js';
import {useTheme} from '../../../theme/ThemeProvider.js';
import {RSH} from '../../../string/AppDimension.js';

export default function AllOfflineResult() {
  const [visible, setVisible] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [board, setBoard] = useState('');
  const [title, setTitle] = useState({
    items: null,
    text: '',
  });

  const {themeColor} = useTheme();
  const styles = getStyle(themeColor);

  const handelInputModel = (text, items) => {
    setTitle({
      items: items,
      text: text,
    });
    setInput1('');
    setInput2('');
    setBoard('');
    setVisible(true);
  };

  return (
    <Context.Provider value={{setVisible, setInput1, setInput2, setBoard}}>
      <View style={styles.body}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={[GlobalStyles.Items, styles.container]}>
            <OfflineInputCom
              visible={visible}
              input1={input1}
              input2={input2}
              title={title}
              board={board}
            />

            <BoxCom
              onPress={() => handelInputModel('PSC')}
              text={'PSC Result'}
              BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
              TextStyle={styles.btnText}
              source={ImgPhath.EXAMLOGO2}
            />
            <BoxCom
              onPress={() => handelInputModel('JSC', 3)}
              source={ImgPhath.EXAMLOGO2}
              text={'JSC Result'}
              BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
              TextStyle={styles.btnText}
            />
            <BoxCom
              onPress={() => handelInputModel('SSC', 3)}
              source={ImgPhath.EXAMLOGO2}
              text={'SSC Result'}
              BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
              TextStyle={styles.btnText}
            />
            <BoxCom
              onPress={() => handelInputModel('HSC', 3)}
              source={ImgPhath.EXAMLOGO2}
              text={'HSC Result'}
              BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
              TextStyle={styles.btnText}
            />
            <BoxCom
              onPress={() => handelInputModel('NU Honours 1st Year')}
              source={ImgPhath.EXAMLOGO2}
              text={'NU Honours 1st Year'}
              BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
              TextStyle={styles.btnText}
            />
            <BoxCom
              onPress={() => handelInputModel('NU Honours 2nd Year')}
              source={ImgPhath.EXAMLOGO2}
              text={'NU Honours 2nd Year'}
              BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
              TextStyle={styles.btnText}
            />
            <BoxCom
              onPress={() => handelInputModel('NU Honours 3rd Year')}
              source={ImgPhath.EXAMLOGO2}
              text={'NU Honours 3rd Year'}
              BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
              TextStyle={styles.btnText}
            />
            <BoxCom
              onPress={() => handelInputModel('NU Honours 4th Year')}
              source={ImgPhath.EXAMLOGO2}
              text={'NU Honours 4th Year'}
              BtnStyle={[GlobalStyles.btnGrid, styles.btn]}
              TextStyle={styles.btnText}
            />
          </View>
        </ScrollView>
      </View>
    </Context.Provider>
  );
}

const getStyle = ({bg, text2, box}) =>
  StyleSheet.create({
    body: {
      backgroundColor: bg,
      flex: 1,
    },
    container: {
      marginHorizontal: RSH(1),
      marginTop: RSH(2),
      paddingBottom: RSH(5),
    },
    btn: {
      ...GlobalStyles.Shadow,
      backgroundColor: box,
    },
    btnText: {
      color: text2,
    },
  });
