import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/all-products"/>
        <Details path="/all-products/:id" />
        <Update path="all-products/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;