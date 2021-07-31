import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
function App() {
  return (
    <div className="App">
      <h1>ghfhghd</h1>
      <Router>
        <Main path="/all-products"/>
        <Details path="/all-products/:id" />
      </Router>
    </div>
  );
}
export default App;