import styled from 'styled-components';

const LoginHeaderContainer = styled.View`
  width: 100%;
  height: 25%;
  justify-content: center;
  align-items: center;
`;
const LoginHeaderText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ef0bf5;
`;

const FormContainer = styled.View`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RememberMeContainer = styled.TouchableOpacity`
  width: 350px;
  height: 50px;
  flex-direction: row;
  gap: 10px;
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: 40%;
  resize-mode: contain;

  ${props => (props.isVisible ? 'display: none;' : '')}
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  margin: 0 5%;
  justify-content: center;
  align-items: center;
  border-width: 1px;

  ${props => (props.isVisible ? 'position: absolute; bottom: 10px;' : '')}
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ef0bf5;
`;

export {
  LoginHeaderContainer,
  LoginHeaderText,
  FormContainer,
  RememberMeContainer,
  ImageContainer,
  ButtonContainer,
  Button,
  ButtonText,
};
