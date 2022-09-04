
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
function App() {






  return (
    <div class='container hero is-fullheight'>
  <React.Fragment>


<Router>
<Header />
{/* <Home></Home> */}
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} >
            {/* <Home /> */}
          </Route>
          <Route path="/services" element={<Services />}    >
            {/* <Services /> */}
          </Route>
        
        </Routes>
      </div>
    </Router>

<Footer />
  </React.Fragment>
  </div>
  );
}
export default App;