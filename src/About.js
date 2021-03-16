import React from 'react';
import "./about.css";
import margaret from './photos/margaret.jpeg'
import nick from './photos/nick.png'
import jasmine from './photos/jasmine.jpeg'
import sara from './photos/sara.jpeg'

import AboutCard from "./AboutCard"
import {
  CardDeck
} from 'reactstrap';

function About() {
    return (
        <div>
          <h2 style={{textAlign: "left", fontWeight: "bold", color: "584E4E", padding: "3rem"}}>Our Team</h2>
          <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
            <AboutCard photo={margaret} name="Margaret Baker" bio="I am a sophomore at Brown University studying behavioral decision science and economics. I was inspired to work on this project as I want to make education surrounding personal finance more accessible to all. I run the 400m for the Brown Track and Field team and enjoy wake surfing and mountain biking in my free time." />
            <AboutCard photo={nick} name="Nick Sawicki" bio="I am a sophomore at Brown University studying economics and biology on the premed track. I’m passionate about personal finance and believe that it’s extremely important to know how to intelligently manage your money, regardless of whatever profession you decide to pursue in life. When I’m not helping out on The Gen-Z Project, I am busy conducting Pediatric Gastroenterology research at Rhode Island Hospital and working part-time for Bullseye Admissions college counseling service. I’m an avid biker and can be spotted on the East Bay Bike Path any day of the week." />
            </CardDeck>
    
          <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
            <AboutCard photo={jasmine} name="Jasmine Lee" bio="I am a sophomore at Brown University. I am studying neuroscience and am a member of the Brown gymnastics team. Over the past few years I’ve come to realize the importance early personal finance education and am taking steps to better educate myself and prepare for the future. I am very excited about helping others do the same!" />
            <AboutCard photo={sara} name="Sara Sullivan" bio="I am a senior at Brown University concentrating in education studies. After graduating from high school, I quickly realized the importance of personal finance and deliberate money management. These realizations inspired me to find fun and engaging ways for young adults to interact with financial education. I’m excited to help high schoolers learn more about all things money and set themselves up for future financial success." />
          </CardDeck>
        </div>
    )
}

export default About;