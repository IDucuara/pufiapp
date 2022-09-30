import React, { useEffect } from 'react';
/* import { useDispatch } from 'react-redux';
import { getAllIllustrations} from "./redux/actions/index"; */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';



import Landing from './components/Landing/Landing';





function App() {


  

  return (
    <div className="App">

      <div>
        <Route exact path='/' component={Landing} />
      </div>
      <div>
        
        {/* <Route exact path='/illustration' component={Illustration} /> */}
        
       
        
      </div>
    </div>
  );
}

export default App;
