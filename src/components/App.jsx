import React from 'react'
import Project from './Project'
import Top from './Top'
import projects from '../projects'
import Experience from './Experience'
import experiences from '../experiences'
import Carousel from './Carousel'


function createProject(project){
    return (
        <div className="project-container">
        <Project
            key={project.id}
            id={project.id}
            name={project.name}
            stack={project.stack}
            img={project.imgURL}
            description={project.description}
            vidURL={project.vidURL}
            projURL={project.projURL}
            gitURL={project.gitURL}
        />
        </div>
        
    )
}

function createWorkExperience(we){
    return(
        <div className="project-container">
            <Experience 
                key={we.id}
                id={we.id}
                companyURL={we.companyURL}
                position={we.position}
                imgURL={we.imgURL}
                description={we.description}
                date={we.date}
                
            />
        </div>
    )
}

function App(){
    return (
        <div className="wrapper">
            <a className="back2top" href="#top-begin">Back To Top</a>
            <Top />
            <h1 id="about-begin" className="about-title">About Me</h1>
            <div className="about">
                <p className="about-p">
                I have always been fascinated with computers from a very young age. When I was in elementary school, computers were still quite old-fashioned as opposed to the types of machines we see today. However, when I was at that age, I did not know whether I wanted to learn more about hardware or software.

                Fast-forward to high school, choosing between the two was much clearer now. Software just had much more to offer in terms of sheer variety. I took courses in high school related to CS and I knew that's what I wanted to do as a career.

                Now, I am an undergraduate student at NYU Tandon aspiring to get a Bachelor's degree in Computer Science and eventually a Master's degree. As of now, I am a private tutor. However, I am looking for more opportunities such as internships in the computer science industry. 
                </p>
            </div>
            <div className="projects-container">
            <h1 id="projects-begin" className="projects-title">My Projects</h1>
            <marquee behavior="scroll" direction="left">If you hover over the logos, you will get the option to view the project and the github link. </marquee>
            <div className="projects">
                
                    {createProject(projects[0])}
                    {createProject(projects[1])}
                              
            </div>
            <div className="projects">
                    {createProject(projects[2])}
            </div>
            </div>

            <div className="projects-container">
            <h1 id="experiences-begin" className="projects-title">Work Experience</h1>
            <marquee behavior="scroll" direction="left">If you click on the logos, you will be redirected to the comany's website!</marquee>
            <div className="projects">
                    {createWorkExperience(experiences[0])}
                    {createWorkExperience(experiences[1])}
            </div>
            </div>

            <div className="projects-container">
            <h1 id="liscenses-begin" className="projects-title">Liscenses and Certifications</h1>
                <br/>
                <h1 className="block">JP Morgan Software Engineering Virtual Experience Program Participant</h1>
                <img className="pic block" src="./jpCert.png" alt=""/>
                <br/>
                <h1 className="block">Autodesk Certified Professional: Inventor</h1>
                <img className="pic block" src="./autodesk.png" alt=""/>
                <br/>
            </div>

            <div id="utube-begin" className="utube-container">
            {/* <h1 id="liscenses-begin" className="utube-title">YouTube Channel</h1> */}
                <Carousel />
            </div>
            
            <div className="projects-container">
            <h1 id="contacts-begin" className="projects-title">Contact Me</h1>
            <h5>Email: <a href="mailto:iao233@nyu.edu">iao233@nyu.edu</a></h5>
            <h5>Phone: (646)705-9950</h5>
            </div>
        </div>
    )
}

export default App;
