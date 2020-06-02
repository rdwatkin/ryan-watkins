import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Card from './Components/Card/Card';
import Fade from 'react-reveal/Fade';
import Experience from './Components/Experience/Experience'

function App() {

  const webDev = "I have experience building websites using React, Javascript, Bootstrap, Babel, HTML, and CSS"
  const network = "During my internship at Arista Networks, I worked routinely with common network protocols such IP, TCP, DNS, FTP, HTTP, etc."
  const embedded = "During my interships with Gemini Design and Arista Networks I spent the majority of my time writing embedded code in C"

  const arista = [  "\u25CF Feature Implementation: Expanded access control list matching capabilities on TCP flags using Python and C++ to help protect networks from TCP syn fragment DDos attacks. Wrote a command to configure these settings from the switch’s command line interface.", <br/>, "\u25CF Bug Fixes: Fixed issues with internal testing tools crashing while sending TCP packets over IPv6. Closed a false positive test case in the routing tests. Removed checks on ingress interfaces when configuring egress support to avoid improper changes to topology properties."]
  const UCSC = "\u25CF Grading: Reader for Introduction to Computer Networks. Graded student submitted labs, homework assignments and exams in a timely manner. Attended lab sections to help students with homework as well as answer questions about previously graded assignments."
  const gemini = ["\u25CF Embedded Systems: Developed firmware in C for a Nucleo F401re micro-controller to communicate with the company’s custom board over SPI and to send and receive data through a computer’s serial communication port using USART thereby enabling the company to control their custom board from a GUI.", <br/>,
  "\u25CF User Interface Design: Designed and implemented a serial communication port monitor using Microsoft Visual Studio in C# which sends and receives data from USB.", <br/>, "\u25CF Scholarship: Received the Gemini Design Engineering Scholarship at the end of the summer internship for my abilities to quickly come up to speed on new technologies."]
  const pt = ["\u25CF Help Desk & Data Entry: Promptly handled repair requests on a broad range of office technologies to maximize work space efficiency. Maintained and updated electronic client data daily to ensure company information was always up to date."]


  return (
    <div className="App">
      <div className="wallpaper" ></div>
      <Fade up>
        <HomePage />
      </Fade>
      <div>
        <Fade>
           <h1 id="title" >Skills</h1>
        </Fade>
        <div className= "list">
          <Card dir="right" color="green" title="Website Development" text={webDev} icon="layers" />
          <Card dir="top" color="blue" title="Networking" text={network} icon="Server"/>
          <Card dir="left" color="orange" title="Embedded Programming" text={embedded} icon="codeSlash"/>
        </div>
      </div>
      <div>
          <Fade>
            <h1 id="title" >Experience</h1>
          </Fade>
        <div className="exp">
          <Experience date={["Oct. 2019 -", <br/>, "Dec. 2019"]} company="University of California, Santa Cruz" position="Reader" desc={UCSC}/>
          <Experience date={["Jul. 2019 -", <br/>, "Sep. 2019"]} company="Arista Networks" position="Software Engineering Intern" desc={arista}/>
          <Experience date={["Jul. 2018 -", <br/>, "Sep. 2018"]} company="Gemini Design" position="Software Engineering Intern" desc={gemini}/>
          <Experience date={["Jul. 2017 -", <br/>, "Sep. 2017"]} company="Patenaude and Felix APC" position="Information Technology Intern" desc={pt}/>
        </div>
      </div>

      <div>
          <Fade>
            <h1 id="title" >Education</h1>
          </Fade>
        <div className="exp">
          <Experience date={["Sep. 2016 -", <br/>, "Dec. 2019"]} company="University of California, Santa Cruz" position="Bachelor of Science" desc="Major in Computer Science. Graduated with honors. GPA: 3.52 / 4"/>
        </div>
      </div>

      <div class="social">
        <Fade>
          <h1 id="title" >Contact</h1>
        </Fade>
        <Fade left>
          <a class="btn" href="https://www.linkedin.com/in/ryan-watkins-08a523126/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="btn" href="https://github.com/rdwatkin" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Fade>
      </div>
    </div>
  );
}

export default App;
