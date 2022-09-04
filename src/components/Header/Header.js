import React from 'react';

import{
Link
} from "react-router-dom";
function Header() {

    const [isActive, setisActive] = React.useState(false);
    return (
<div>

<nav class="navbar" role="navigation" aria-label="main navigation">
 
 
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
    <Link to="/" >
      <h1 class="title"> آب لاند</h1>
      {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"  /> */}
    </Link>
    
    </a>

    <a 
     onClick={() => {
        setisActive(!isActive);
      }}
    
    
    
    role="button" 
    class="navbar-burger" aria-label="menu"
    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
     aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    
    
 
      <a class="navbar-item">
      <Link to="/" >
        الرئيسية

        </Link>
      </a>
    
      <a class="navbar-item">
      <Link to="/services" >
        خدماتنا
        </Link>
      </a>

      {/* <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> */}
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        {/* <div class="buttons"> */}
          <a class="button is-primary">
            <strong>آطلب الآن</strong>
          </a>
          {/* <a class="button is-light">
            Log in
          </a> */}
        {/* </div> */}
      </div>
    </div>
  </div>
</nav>
</div>
    );
}

export default Header;