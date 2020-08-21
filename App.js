import React from 'react';
import ContextProvider from './context-provider';
import Drawer from './components/navigators/drawer'


const App = () => {

  return (
    <ContextProvider>
      <Drawer />
    </ContextProvider>
  )

}

export default App;
