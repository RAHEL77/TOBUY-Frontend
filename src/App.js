import './App.css';
// import './css/Navbar.css';
import Main from './Components/Main'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
   
            <Route path="/" exact component={Main} />
                   
          </div>
        </BrowserRouter>
      </div>
    );

  }

export default App;
