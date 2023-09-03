import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const LoginInputField = styled.TextInput`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #373737;
  background-color: #fff;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 15px;
  padding-left: 15px;
`;
const LoginInput = props => {
  const {placeholder, value, onChangeText, isSecureText} = props;
  return (
    <LoginInputField
      placeholder={placeholder}
      placeholderTextColor="#000"
      value={value}
      onChangeText={e => {
        onChangeText(e);
      }}
      secureTextEntry={isSecureText}
    />
  );
};

export default LoginInput;
