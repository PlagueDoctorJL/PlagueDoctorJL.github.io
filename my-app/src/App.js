import './boilerplateStyling.css';
import './App.css';
import { Row, Col, ProgressBar} from 'react-bootstrap';

function App() {
  return (
    <div className="vFill">
      <Row className="m-0 vFill" >
        <Col className="summaryColumn p-0">
          <h4 className="name"><b>Jasper Lyons</b></h4>
          <p className="jobTitle">SOFTWARE ENGINEER</p>
          <hr className="divider"/>

          <h6><b>Details</b></h6>
          <p>
            Auckland, New Zealand<br/>
            jasperlbusiness@gmail.com<br/>
            <a href="https://www.linkedin.com/in/jasperlyonsnz/" className="link">https://www.linkedin.com/in/jasperlyonsnz/</a>           
          </p>

          {/** Div wrapper to match margin of above p element*/}
          <div style={{marginBottom: '16px'}}>
            <h6><b>Programming Languages</b></h6>
            <p className="skillName">C++</p>
            <ProgressBar className="skillBar" variant="info" now={100}/>          
            <p className="skillName">Swift</p>
            <ProgressBar className="skillBar" variant="info" now={85}/>
            <p className="skillName">Javascript</p>
            <ProgressBar className="skillBar" variant="info" now={85}/>
            <p className="skillName">Python</p>
            <ProgressBar className="skillBar" variant="info" now={80}/>
            <p className="skillName">C#</p>
            <ProgressBar className="skillBar" variant="info" now={75}/>
          </div>

          <div style={{marginBottom: '16px'}}>
            <h6><b>Skills</b></h6>
            <p className="skillName">Unreal Engine</p>
            <ProgressBar className="skillBar" variant="info" now={100}/>          
            <p className="skillName">Animation Systems</p>
            <ProgressBar className="skillBar" variant="info" now={95}/> 
            <p className="skillName">Frontend Development</p>
            <ProgressBar className="skillBar" variant="info" now={85}/> 
            <p className="skillName">Backend Development</p>
            <ProgressBar className="skillBar" variant="info" now={80}/> 
            <p className="skillName">OpenGL</p>
            <ProgressBar className="skillBar" variant="info" now={85}/> 
            <p className="skillName">UX Design</p>
            <ProgressBar className="skillBar" variant="info" now={85}/> 
            <p className="skillName">Teamwork and Communication</p>
            <ProgressBar className="skillBar" variant="info" now={100}/>  
            <p className="skillName">Photoshop</p>
            <ProgressBar className="skillBar" variant="info" now={90}/>   
          </div>
        </Col>
        <Col className="detailsColumn p-0">   
          <h5 style={{paddingTop: '45px'}}><b>About Me</b></h5>   
          <p>
            I am a passionate creative thinker, driven by learning and self improvement. I pride myself on being able to tackle challenging tasks
            and produce stellar results. I'm experienced in working in a high intensity team environment, as well as
            within a highly self directed framework. Through the intermittent lockdowns New Zealand has faced, I've had to find new employment three
            times (circumstances unrelated to me in each case). I'm no stranger to hitting the ground running, be it in the office, or from home.
          </p>  

          <h5><b>Employment History</b></h5>      
          <p className="employmentSubheading"><b>Software Engineer, Objective Acuity Ltd, Auckland</b></p>  
          <p className="employmentDuration">DECEMBER 2020 - NOVEMBER 2021</p>
          <ul>
            <li>Redesigned, refactored, and optimised Swift codebase</li>
            <li>Implemented Swift graphics rendering setup</li>
            <li>Designed and developed website frontend</li>
            <li>Designed and developed database structure</li>
            <li>Developed website backend</li>
            <li>Developed unit testing, and end to end testing for website</li>
            <li>Researched and documented website payment system services</li>
          </ul>

          <p className="employmentSubheading"><b>Junior VR Developer, Wanderer Ltd, Auckland</b></p>  
          <p className="employmentDuration">APRIL 2020 - DECEMBER 2020</p>
          <ul>
            <li>Lead rapid level previs development</li>
            <li>Lead the design and development of animation systems</li>
            <li>Advised the animation pipeline</li>
            <li>Developed NPC advanced locomotion and head/eye tracking systems</li>
            <li>Designed and developed NPC AI systems</li>
            <li>Designed and developed gameplay and puzzle mechanics</li>
            <li>Developed python scripts to assist designer/artist workflow</li>
            <li>Performed quality assurance and debugging for PSVR</li>
          </ul>

          <p className="employmentSubheading"><b>Unreal Engine Software Engineer, Kara Technologies, Auckland</b></p>  
          <p className="employmentDuration">NOVEMBER 2019 - APRIL 2020</p>
          <ul>
            <li>Designed and developed complex animation blending systems</li>
            <li>Designed software, and software architectures</li>
            <li>Developed text parsing system to augment animation blending systems</li>
            <li>Developed unorthodox animation integration using the FBX SDK</li>
            <li>Developed specialized animation executable, using custom Slate UI</li>           
          </ul>

          <div style={{marginBottom: '16px'}}>
            <h5><b>Education</b></h5>  
            <p className="educationSubheading"><b>Bachelor of Software Engineering, Media Design School, Auckland</b></p>  
            <p className="educationDuration">FEBRUARY 2017 - NOVEMBER 2019</p> 
            <p className="educationSubheading"><b>Diploma in Information Systems, NorthTec, Whangarei</b></p>  
            <p className="educationDuration">APRIL 2016 - FEBRUARY 2017</p>    
            <p className="educationSubheading"><b>Computer Forensics/Networking/Hardware, Techtorium NZIIT, Auckland</b></p>  
            <p className="educationDuration">JULY 2015 - NOVEMBER 2015</p> 
          </div>

          <h5><b>References/Portfolio</b></h5>  
          <p>
            Will provide employer/tertiary references and code portfolio upon request.
            View the code used to build this page at: <a href="https://plaguedoctorjl.github.io/" className="codeLink">https://plaguedoctorjl.github.io/</a>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
