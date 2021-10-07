import React, { useState } from 'react';
import Cursor from './components/Cursor';
import Main from './components/Main';
import Menu from './components/Menu';

export const Context = React.createContext();

const App = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Context.Provider value={[menuActive, setMenuActive]}>
      <div>
        <Main />
        <Menu />
        <Cursor />
      </div>
    </Context.Provider>
  );
};

export default App;
