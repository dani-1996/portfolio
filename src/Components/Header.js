import React, { Component } from 'react';
import "../../src/App"

import EmailIcon from '@material-ui/icons/Email'

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#projects">Projects</a></li>
      
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
      
            <h1 className="writeAnimation">PORTFOLIO</h1>
            <h1> Daniel Steinhauser </h1>
            <p style={{fontSize:"25px", color:"rgb(0, 224, 253)"}} >Front-End Entwickler</p>
            <p className="textAnimation" style={{fontSize:"25px", color:"rgb(0, 224, 253)"}} >HTML CSS JAVASCRIPT REACT</p>
            <hr />
            <ul className="social">
           <a className="smoothscroll" href="#about"> <EmailIcon  fontSize="large"/></a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
