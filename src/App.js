
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import{BrowserRouter as Router,Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
const[{user }, dispatch]= useStateValue();




  return (
    <div className="App">
      {!user ? (
        <Login/>

      )
      :
    
     <div className="app__body">
       <Router>
         <Sidebar />

      <Switch>
     

      <Route path="/app">
      
        <Chat/>
      </Route>

      <Route path="/rooms/:roomId">
        
        <Chat />
      </Route>



        <Route path="/">
         

         
        </Route>


       

      
     
     </Switch>
        </Router>

      </div>

      }
    </div>
  );
}

export default App;
