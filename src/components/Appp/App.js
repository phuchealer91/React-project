import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { 
  BrowserRouter as Router
} from "react-router-dom";
import RouterURL from '../RouterURL/RouterURL';
class App extends React.Component {
  
  render(){
    return (
      <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="container mt-5">
          <RouterURL></RouterURL>
          <Footer></Footer>
        </div>
      </div>
      </Router>
    );
  }
 
}

export default App;
