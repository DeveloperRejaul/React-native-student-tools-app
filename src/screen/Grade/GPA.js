import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {handelData, ar} from '../../helperFnc/handelData.js';
import GpaNameSubNoCom from '../../components/GpaName&SubNoCom.js';
import GradeSelactResult from '../../components/GradeSelact&Result.js';
import {styles} from './styles.js';
import {useTheme} from '../../theme/ThemeProvider.js';

export default function GPA() {
  // Object For Inpute State
  let objects = [];

  // All State heare
  const [Inpute, setInpute] = useState(objects);
  const [resultModel, setResultModel] = useState(false);
  const [Subject, setSubject] = useState(false);
  const [createSubject, setcreateSubject] = useState('');
  const [Gpa, setGpa] = useState(null);
  const [Alert, setAlert] = useState(false);
  const [yourName, setyourName] = useState(null);
  const {themeColor} = useTheme();

  // Creating Object State
  for (let x = 0; x < Number(createSubject); x++) {
    objects[x] = {
      value: '4',
    };
  }

  // Handel Create button
  const createBtn = () => {
    const patten = /\D/;
    const result = createSubject.match(patten);

    if (
      (createSubject !== null) &
      (createSubject <= 15) &
      (createSubject != '')
    ) {
      setSubject(true), setInpute(objects);
    }
    createSubject >= 16 && setAlert(true);
    createSubject == null && setAlert(true);
    result !== null && setAlert(true);
  };

  // This function collact DropDown Component data
  const CollectPrentData = useCallback((id, numGrade) => {
    handelData(id, numGrade);
  });

  // Handel Credit Input
  const HandelInputChange = (value, i) => {
    const List = [...Inpute];
    List[i].value = value;
    setInpute(List);
  };

  //   handel Calculate button and all algorithom
  const handelResult = () => {
    // All variable
    const myInput = [...Inpute];
    const myAr = [...ar];
    let TotalEannPoint = 0;
    let TotalCredit = 0;
    let newArr = [];

    // crating new arr with grade seleatet value
    myAr.map((e, i) => (newArr = newArr.concat(myAr[i])));

    //Index base Multyply Grade with credit for Total earnpoint
    myInput.map((e, i) => (TotalEannPoint += +newArr[i] * +myInput[i].value));

    // plus Total Credit
    myInput.map((e, i) => (TotalCredit += +e.value));

    // Finaly creating result Gpa
    const Gpa = TotalEannPoint / TotalCredit;

    setGpa(Gpa.toFixed(2));

    // Conditionay render result  or alert
    !isNaN(Gpa) ? setResultModel(true) : setAlert(true);
  };

  // handel Reasult view
  const handelModelColose = () => {
    setResultModel(false);
    setSubject(false);
  };

  // Distracture Color
  const {bg} = themeColor;

  return (
    <View style={[styles.body, {backgroundColor: bg}]}>
      <View style={styles.contaier}>
        {/* Collact Subject number  View */}
        {Subject || (
          <GpaNameSubNoCom
            onPress={createBtn}
            handelAlert={() => setAlert(false)}
            alert={Alert}
            handelOk={() => setAlert(false)}
            handelCencle={() => setAlert(false)}
            handleCreateSub={setcreateSubject}
            createSubject={createSubject}
            handleYourName={setyourName}
            yourName={yourName}
            palaholder="Subjects"
          />
        )}

        {/* All Subject View */}
        {Subject && (
          <GradeSelactResult
            handleTextInput={value => HandelInputChange(value, i)}
            CollectPrentData={CollectPrentData}
            alert={Alert}
            handelResult={handelResult}
            Inpute={Inpute}
            Gpa={Gpa}
            handelModelColose={handelModelColose}
            resultModel={resultModel}
            yourName={yourName}
            handelAlert={() => setAlert(false)}
            handelCencle={() => setAlert(false)}
            handelOk={() => setAlert(false)}
          />
        )}
      </View>
    </View>
  );
}
