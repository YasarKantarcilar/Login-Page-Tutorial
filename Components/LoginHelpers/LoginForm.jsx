import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import LoginInput from './LoginInput';
const LoginForm = props => {
  const {email, setemail, password, setpassword} = props;
  const inputsData = [
    {
      placeholder: 'E-mail',
      value: email,
      onChangeText: setemail,
      isSecureText: false,
    },
    {
      placeholder: 'Password',
      value: password,
      onChangeText: setpassword,
      isSecureText: true,
    },
  ];
  const renderInputs = ({item}) => {
    return <LoginInput {...item} />;
  };
  return (
    <View
      style={{
        minWidth: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <FlatList renderItem={renderInputs} data={inputsData} />
    </View>
  );
};

export default LoginForm;
