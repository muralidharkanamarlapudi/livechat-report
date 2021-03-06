import React from 'react';
import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import { AppProvider } from './AppProvider'
import Settings from '../Settings'
import Content from '../Shared/Content'
import Dashboard from '../Dashboard';

function App() {
  return (
    <AppLayout className="App">
      <AppProvider>
        <AppBar />
        <Content>
          <Dashboard />
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
