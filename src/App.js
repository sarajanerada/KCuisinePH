import React from 'react' ;
import { BrowserRouter as Router  } from 'react-router-dom';
import Home from './pages';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
    <GlobalStyle />
      <Home />
    </Router>
  );
}

export default App;
