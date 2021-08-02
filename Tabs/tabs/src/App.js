import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';

function App() {
  const [content, setContent] = useState("")

  const displayMsg = (msg) =>{
      setContent(msg)
  }

  return (
    <div className="App">
      <Tabs data={displayMsg}/>
      <Display content={content}/>
    </div>
  );
}

export default App;
