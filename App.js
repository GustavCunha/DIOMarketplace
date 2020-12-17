import 'react-native-gesture-handler';
import React from 'react';

import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={}>
        <StatusBar barStyle="light-content" backgroundColor="#312e38"/>
        <Routes/>
    </Provider>
  );
}
