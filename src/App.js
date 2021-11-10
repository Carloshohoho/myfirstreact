import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hi friends</p>
        <p>-Carlos</p>
        <Greet name="Peter" heroName="iron man">
        <Message/>
        </Greet>
        <Greet name="Tony" heroName="Spider man">
        <Button/>
        </Greet>
        <Greet name="Tony" heroName="Hulk">
        </Greet>
        
       
      </header>
    </div>
  );
}

export default App;
