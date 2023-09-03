import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginForm from './LoginHelpers/LoginForm';
import main from '../assets/main.png';
import CheckBox from './LoginHelpers/Checkbox';
import {
  LoginHeaderContainer,
  LoginHeaderText,
  FormContainer,
  RememberMeContainer,
  ImageContainer,
  ButtonContainer,
  Button,
  ButtonText,
} from './LoginHelpers/LoginStyled';

import useKeyboardStatus from 'react-native-keyboard-status';

const Login = () => {
  const [isChecked, setisChecked] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleRememberMePress = () => {
    setisChecked(!isChecked);
  };

  const handleSubmit = () => {
    console.log(email, password, isChecked);
  };

  const {isVisible} = useKeyboardStatus();
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginHeaderContainer>
        <LoginHeaderText>LOGIN</LoginHeaderText>
      </LoginHeaderContainer>
      <FormContainer>
        <LoginForm
          email={email}
          setemail={setemail}
          password={password}
          setpassword={setpassword}
        />
        <RememberMeContainer onPress={handleRememberMePress}>
          <CheckBox isChecked={isChecked} />
          <Text>Remember me</Text>
        </RememberMeContainer>
      </FormContainer>
      <ImageContainer source={main} isVisible={isVisible} />
      <ButtonContainer>
        <Button isVisible={isVisible} onPress={handleSubmit}>
          <ButtonText>LOGIN</ButtonText>
        </Button>
      </ButtonContainer>
    </SafeAreaView>
  );
};

export default Login;
