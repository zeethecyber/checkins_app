import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import Router from './src/routes';

const theme = extendTheme({
  colors: {
    primary: '#4027DFFC',
  },
  components: {
    Button: {
      baseStyle: {
        backgroundColor: 'red.500',
      },
    },
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
