import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Julio' }}>
      <SignIn />
      <GlobalStyles />
    </AuthContext.Provider>
  </>
);

export default App;
