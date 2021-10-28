import './App.css';
import Router from './Router';
import CountProvider from './helper/context/CounterContext'


function App() {
  return (
    <CountProvider>
      <Router/>
    </CountProvider>
       
  );
}

export default App;
