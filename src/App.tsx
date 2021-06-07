/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ProgressDialog } from './components/common';
import AppContainer from './navigation'
import { Root } from 'native-base';

const App: React.FC = () => {
  return (
    <Root>
      <ProgressDialog onRef={(c: ProgressDialog) => {
        if (c)
          ProgressDialog.dialogInstance = c;
      }} />
      <AppContainer /></Root>
  );
};

export default App;
