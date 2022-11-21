import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { Linking } from 'react-native';
import * as React from 'react';



function App() {
  return (
    <div className="App">
      <div>
        <Cover />
      </div>
      <div >
        <Image />
      </div>
      <div className="heading">
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );


}

function Cover() {
  return (
    <div>
      <img className="coverimage" src="project4.jpeg" alt="notfound" />   
       </div>
  );
}

function Image() {
  return (

    <div className="contact_info">
      <img className="image_props" src="Sathya_Kamaraj.jpg" alt="no image" />
      <h2 className="profile_name">Sathya Kamaraj</h2>
      <p className="designation">Application Support Engineer Associate</p>
      <p className='location'>Chennai,TamilNadu,India</p>
      <div className='icon_design'>
        <SocialIcon url="https://www.linkedin.com/in/sathya-kamaraj-5b9719a1/?originalSubdomain=in" target="_blank" />
        <SocialIcon className='icon' url="https://github.com/sathyakamaraj1" target="_blank" />
        <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /></head>
        <button class="btn" onClick={()=>window.open('SathyaKamaraj.pdf','_blank')}><i class="fa fa-download"></i> Resume</button> </div>
    </div>
  );
}

function AboutMe() {

  return (
    <div className='Heading'>
      <h2 >Hello There!!</h2>
      <p>I'm a web developer living in Chennai, India. Having 4.5+ years of experience in IT industry. I enjoy building everything from small business site to rich interactive web apps.
        If you are a employer looking to hire, you can get in touch with me here.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h2 className='sideHeading'>Skills and Tool Expertise</h2>
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /></head>
      <div className='button_style'>
        <button class="btn1"><img className="icon_style" src="html.png" />HTML</button>
        <button class="btn1"><img className="icon_style" src="css.png" /> CSS</button>
        <button class="btn1"><img className="icon_style" src="javascript.png" />JAVASCRIPT</button>
        <button class="btn1"><img className="icon_style" src="logo512.png" />REACTJS</button>
        <button class="btn1"><img className="icon_style" src="splunk.png" />  SPLUNK</button>
        <button class="btn1"><img className="icon_style" src="sql.png" />SQL</button>
        <button class="btn1"><img className="icon_style" src="unix.png" /> Unix</button>
        <button class="btn1"><img className="icon_style" src="ITIL.jpg" />ITIL</button>
        <button class="btn1"><img className="icon_style" src="github.png" />Git</button>
        <button class="btn1"><img className="icon_style" src="avada.jpg" />Avada</button>
        <button class="btn1"><img className="icon_style" src="autosys.png" />Autosys</button>
        <button class="btn1"><img className="icon_style" src="SecureCRT.jpg" />SecureCRT</button>
        <button class="btn1"><img className="icon_style" src="putty.png" />Putty</button>
        <button class="btn1"><img className="icon_style" src="toad.png" />Toad</button>
        <button class="btn1"><img className="icon_style" src="snowflakes.png" />Snowflakes</button>
      </div>
    </div>

  );
}

function Projects() {
  return (
    <div>
      <br/>
      <h2 className='sideHeading'>Projects</h2>
      <h3 className="subheading">What I built</h3>
      <div className="projectList">
      <div className="project_image">
        <img src="project.png" alt="Project 1" href="https://63529ed2bcd74108502f1a4a--deluxe-selkie-9cc3e9.netlify.app/" className='projectImage'/>
        <h3 className='sideHeading1'>Makeup API</h3>
        <p className='description'><b>Description:</b>  Makeup API using async/await with fetch.</p>
        <button class="project_btn"  onClick={() => window.open('https://63529ed2bcd74108502f1a4a--deluxe-selkie-9cc3e9.netlify.app/', '_blank')}><p className="text_design">Click Here</p></button>
       </div>
      <div className="project_image">
      <img src="project4.jpeg" alt="Project 1" className='projectImage'/>
      <h3 className='sideHeading1'>Responsive Webdesign I</h3>
        <p className='description'><b>Description:</b> MIMIC the front end of CSS Tutorial website. </p>
        <button class="project_btn"  onClick={() => window.open('https://sathyakamaraj1.github.io/ResponsiveWebDesign/','_blank')}><p className='text_design'>Click Here</p></button>
      </div>
      <div className="project_image">
      <img src="project5.jpeg" alt="Project 1" className='projectImage'/>
      <h3 className='sideHeading1'>Responsive Webdesign II</h3>
        <p className='description'><b>Description:</b> MIMIC the front end of JAVASCRIPT Tutorial website.</p>
        <button class="project_btn"  onClick={() => window.open('https://sathyakamaraj1.github.io/Documentation-task2/','_blank')}><p className='text_design'>Click Here</p></button>
      </div>
      </div>
    </div>
  );
}

function Contact(){
  return(
    <div>
      <h2 className='sideHeading'>Contact</h2>
      <h3 className="subheading">Connect with me</h3>
      <p className='contact_description'>If you want to know more about me or my work or if you just like to say hello,send me a message.I'd love to
        hear from you. 
      </p> <div className='form_design'>
      <form action="mailto:sathyakamarajrks@gmail.com" method="post" enctype="text/plain">
         Name:<br/><input type="text" id="sname" name="sname" placeholder="Enter your name here.."/> <br/>
         Email:<br/><input type="email" name="ssubject"  placeholder="Enter your mailid here.."/><br/>
         Message:<br/><textarea name="smessage"  className="textarea_design" placeholder="Enter your message here.."/><br/>
         <input type="submit" value="Send"/>
      </form>  
      </div>
    </div>
  );
}

export default App;
