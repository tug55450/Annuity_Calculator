import logo from './CalculatorImage.jpg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Annuity Calculator
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Calculator
        </a>
        <TextField variant='outlined' />
        <Button onClick={() => console.log('click me')}>Click me</Button>
      </header>
    </div>
  );
}

export default App;
