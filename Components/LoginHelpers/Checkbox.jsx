import {View} from 'react-native';

export default CheckBox = ({isChecked}) => {
  const checkboxColor = isChecked ? '#EF0BF5' : '#fff';
  const checkboxRadius = isChecked ? 20 : 0;
  const checkboxBorderWidth = isChecked ? 0 : 1;
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: checkboxRadius,
        backgroundColor: checkboxColor,
        borderWidth: checkboxBorderWidth,
        borderColor: '#373737',
      }}></View>
  );
};
