import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Puff from './components/Products/Puff/Puff';
import Rain from './components/Products/Rain/Rain';
import Cart from './components/Products/Cart/Cart';
import Nap from './components/Products/Nap/Nap';


function App() {


  

  return (
    <div className="App">

      <div>
        <Route exact path='/' component={Landing} />
      </div>
      <div>
        
        <Route exact path='/puff' component={Puff} />
        <Route exact path='/rain' component={Rain} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/nap' component={Nap} />
        
       
        
      </div>
    </div>
  );
}

export default App;
