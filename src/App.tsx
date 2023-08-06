import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Application} from "./Components/applications/application";
import { MachineRoundCoding } from './MachineRoundCoding';
import { AppProviders } from './providers/AppProviders';
import { MuiMode } from './Components/miui/mui-modes';
function App() {
  return (
    <AppProviders>
    <div className="App">
      <MuiMode/>
      {/* <Application /> */}
      {/* <MachineRoundCoding /> */}
    </div>
    </AppProviders>
  );
}

export default App;
