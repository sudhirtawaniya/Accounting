import React from 'react'
import { HashRouter } from 'react-router-dom';

import Body from './componets/body';

function App() {
 
  return (
   <>
   <HashRouter base="/">
<Body />
</HashRouter>
   </>
  );
}

export default App;
