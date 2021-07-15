import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className="persons">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
      </div>
      <div className="persons">
        <PersonCard firstName = "Layth" lastName = "Irshaid" age = {23} hairColor = "Black"/>
      </div>
      <div className="persons">
        <PersonCard firstName = "Rohronoa" lastName = "Zoro" age = {29} hairColor = "Green"/>
      </div>
      <div className="persons">
        <PersonCard firstName = "Nami" lastName = "Bartillo" age = {23} hairColor = "Orange"/>
      </div>
    </div>
  );
}

export default App;
