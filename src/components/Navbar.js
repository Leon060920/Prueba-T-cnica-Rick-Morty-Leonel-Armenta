import React from "react";


const Navbar = ({ brand }) => { //El valor de brand se declara dentro del App.js al inicio del return
  return (
    
    //Simple Navbar de React Bootstrap
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
