import React from 'react';
import AppStack from './routes';

import './global.css';
import { SelectedProvider } from './storage/SelectedContext';

function App() {
  return (
    <SelectedProvider>
      <AppStack />
    </SelectedProvider>
  );
}

export default App;
