import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Body from './componets/body';

function App() {
 
  return (
   <>
   <BrowserRouter basename='/Accounting/'>
<Body />
</BrowserRouter>
   </>
  );
}

export default App;
