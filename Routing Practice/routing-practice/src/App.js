import './App.css';
import {Router} from '@reach/router'
import Main from './Main';
import Variable from './Variable';

function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/home"/>
      <Variable path="/:variable"/>
      <Variable path="/:variable/:color/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;
