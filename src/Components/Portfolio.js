import React, { Component } from 'react';
import prof from "./profilepic.jpg"
import "../App.css"
import Project from "./Project"

import { makeStyles } from '@material-ui/core/styles';
import memories from "../images/memories.jpg"





const Portfolio = () =>  {
 
 
    
    return (
      <div className="portfolio" id="projects">

      {/* <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <a href="https://utub.netlify.app" className="link-portfolio" target="_blank"> YouTube Suchmaschine <br className="br"/>
                React &  material-ui  <br/>
               
                <img src="utub.jpg"/></a> <br/>
               
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                <a href="https://kommerz.netlify.app"  className="link-portfolio" target="_blank"> e-Commerce Shop  <br/>
                Commerce.js <br/>
                <img src="kommerz.jpg"/></a> <br/>
                </div>
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <span className="abstand"/>
                <a href="https://cryptonewssteini.netlify.app"  className="link-portfolio" target="_blank"> Kryptowährungen mit aktuellen News <br/>
                <img src="Krypto.jpg"/></a> <br/>
                </div>
                
            </div>
          </div>
      </div> */}

     
   {/* </section> */}
   
  <Project classname="font-for-project" projectName="YouTube-Suchmaschine"
             projectNumber="#1"
             firstDescription="React"
            secondDescription="material-ui" 
            thirdDescription="YouTube-Api"
            image="utub.jpg"
            link="https://utub.netlify.app"
            additionalText="Eine Suchmaschine die mit der YouTube API verbunden ist."
             />
            

<Project  projectName="e-Commerce Shop"
          projectNumber="#2"
             firstDescription="React"
            secondDescription="material-ui" 
            thirdDescription="Commerce.js"
            image="kommerz.jpg"
            link="https://kommerz.netlify.app"
            additionalText="Ein e-Commerce Shop der mit Commerce.js und einer API verbunden ist, welche es zulässt Produkte, Preise und Informationen hinzuzufügen und zu verwalten."
             />

<Project  projectName="Crypotverse"
            projectNumber="#3"
             firstDescription="React"
            secondDescription="material-ui" 
            thirdDescription="redux-toolkit"
            image="Krypto.jpg"
            link="https://cryptostatsnews.netlify.app"
            additionalText= "Eine Plattform die über alle Kryptowährungen relevante Informationen verfügt.
            Es können einzelne Kryptowährungen ausgewählt werden um detailierte Informationen zu erhalten."
             />

<Project  projectName="social-media-App memories"
            projectNumber="#4"
             firstDescription="React + Redux"
            secondDescription="material-ui" 
            thirdDescription="node.js + express"
            fourthDescription="MongoDB"
            image={memories}
            link="https://memoriesbydaniel.netlify.app"
            additionalText="Eine Social Media App zum erstellen von Erinnerungen. 
            Das Backend und die API wurden mit node.js und express erstellt und anschließend auf heroku gehostet.
            Die Erinnerungen können von jedem bearbeitet werden und sind Öffentlich. Die Erinnerungen werden mithilfe der Datenbank MongoDB gepeichert.
            "
             />

</div>
    )}
  


export default Portfolio
