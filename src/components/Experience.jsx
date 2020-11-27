import React from "react";


function Experience(props) {
  return (
    <div className="work fade-in">
      <div className="logo-div">
      <a href={props.companyURL}><img className="project-logo" src={props.imgURL} alt=""/></a>
      <div className="projGit" id={props.id + 'div'}>
        <a href={props.projURL} target="_blank" className="project-link nav-item">Project Link</a>
        <br/>
        <a href={props.gitURL} target="_blank" className="project-link nav-item">Github Link</a>
      </div>
      </div>
      {/* <h1 className="project-title">{props.name}</h1> */}
      <h3>Position: {props.position}</h3>
      <h3>Date: {props.date}</h3>
      <ul className="bpList">
        <li>{props.description[0]}</li>
        <li>{props.description[1]}</li>
      </ul>
      <iframe title="video" width="560" height="275" src={props.vidURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  );

  // {props.name}
}

export default Experience;
