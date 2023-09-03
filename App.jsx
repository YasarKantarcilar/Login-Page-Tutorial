import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from './Components/Login';

/* #EF0BF5 */

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Login />
    </SafeAreaView>
  );
}

export default App;
