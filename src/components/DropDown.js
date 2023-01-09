import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect, memo} from 'react';
import {Ionicons} from '../string/AppIcon.js';
import {Colors} from '../string/AppColors.js';
import {height, RSF, RSH, RSW, width} from '../string/AppDimension.js';
import {TextInput} from 'react-native-gesture-handler';
import {useTheme} from '../theme/ThemeProvider.js';

function DropDown({id, CollectPrentData, Cgpa}) {
  const [DropDown, setDropDown] = useState(false);
  const [SelectData, setSelectData] = useState('Grade');
  const [value, setValue] = useState();

  const {themeColor} = useTheme();
  const styles = getStyle(themeColor);

  // DropDown Data
  const data = [
    [{LaterGrade: 'A+ (4.00)', GradePoint: '4.00'}],
    [{LaterGrade: 'A (3.75)', GradePoint: '3.75'}],
    [{LaterGrade: 'A- (3.50)', GradePoint: '3.50'}],
    [{LaterGrade: 'B+ (3.25)', GradePoint: '3.25'}],
    [{LaterGrade: 'B (3.00)', GradePoint: '3.00'}],
    [{LaterGrade: 'B- (2.75)', GradePoint: '2.75'}],
    [{LaterGrade: 'C+ (2.50)', GradePoint: '2.50'}],
    [{LaterGrade: 'C (2.25)', GradePoint: '2.25'}],
    [{LaterGrade: 'D (2.00)', GradePoint: '2.00'}],
    [{LaterGrade: 'F (0.00)', GradePoint: '0.00'}],
  ];

  // sent data perent to chaild
  useEffect(() => {
    CollectPrentData(id, value, SelectData);
  }, [id, value, SelectData]);

  // handel add Row
  const handelClick = (e, value) => {
    setSelectData(e);
    setDropDown(false);
    setValue(value);
  };

  return (
    <View style={styles.container}>
      {Cgpa ? (
        <TextInput
          style={styles.TextInput}
          placeholder={'Grade'}
          keyboardType="number-pad"
          value={value}
          onChangeText={setValue}
        />
      ) : (
        <View>
          <Pressable
            style={styles.DropDown}
            onPress={() => setDropDown(!DropDown)}>
            <Text style={styles.item}> {SelectData} </Text>
            <Ionicons name="chevron-down" size={RSF(2)} />
          </Pressable>

          <Modal
            visible={DropDown}
            animationType={'fade'}
            transparent
            onRequestClose={() => setDropDown(false)}>
            <View style={styles.modelInner}>
              <View style={styles.ModelView}>
                <Pressable
                  onPress={() => setDropDown(false)}
                  style={styles.CloseBtnContainer}>
                  <Ionicons
                    style={styles.CloseBtn}
                    name="ios-close"
                    size={RSF(2.5)}
                    color={themeColor.text}
                  />
                </Pressable>
                {DropDown &&
                  data.map((e, i) => (
                    <Text
                      key={i}
                      style={styles.DropDownItems}
                      onPress={() =>
                        handelClick(
                          e.map(e => e.LaterGrade),
                          e.map(e => e.GradePoint),
                        )
                      }>
                      {e.map(e => e.LaterGrade)}
                    </Text>
                  ))}
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
}

export default memo(DropDown);

const getStyle = ({bg, text2, box, text}) =>
  StyleSheet.create({
    container: {
      marginHorizontal: RSW(1),
    },
    DropDown: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 1,
      zIndex: 1,
      width: RSW(100) / 3.5,
      borderColor: '#000',
      color: text2,
      fontSize: RSF(1.7),
      marginRight: RSW(0.5),
      paddingHorizontal: RSW(0.2),
      alignItems: 'center',
    },
    item: {fontSize: RSF(2), color: text2},

    // Style For grade modle
    modelInner: {
      justifyContent: 'center',
      alignItems: 'center',
      width: RSW(100),
      height: RSH(100),
      backgroundColor: '#00000099',
    },
    ModelView: {
      backgroundColor: bg,
      padding: RSF(1.2),
      width: RSW(50),
      height: RSH(100) / 1.7,
      borderRadius: 5,
    },
    DropDownItems: {
      fontSize: RSF(2.5),
      textAlign: 'center',
      margin: RSW(100) / 200,
      color: text2,
      fontWeight: '600',
      backgroundColor: box,
      borderRadius: 4,
      paddingVertical: RSW(1.5),
    },
    CloseBtnContainer: {
      alignItems: 'flex-end',
      marginBottom: 5,
    },
    CloseBtn: {
      backgroundColor: box,
    },
    TextInput: {
      width: RSW(100) / 4,
      borderWidth: 1,
      height: RSH(4),
      color: text,
      fontSize: RSF(2),
      paddingHorizontal: RSW(0.4),
      paddingVertical: RSH(0.2),
      // textAlign: 'center',
    },
  });
