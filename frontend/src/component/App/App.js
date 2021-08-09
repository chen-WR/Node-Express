import './App.css';
import Navigation from '../Route/Router';

function App() {
  const greeting = "welcome";
  return(
    <div className='container'>
      <h1 id={greeting}>Welcome</h1>
      <Navigation/>
    </div>
    
  )
}

export default App;
