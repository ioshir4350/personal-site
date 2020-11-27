import React from "react";


function Project(props) {
  return (
    <div className="project fade-in">
      <div className="logo-div">
      <button id={props.id} className="hover-btn"><img className="project-logo" src={props.img} alt=""/></button>
      <div className="projGit" id={props.id + 'div'}>
        <a href={props.projURL} target="_blank" className="project-link nav-item">Project Link</a>
        <br/>
        <a href={props.gitURL} target="_blank" className="project-link nav-item">Github Link</a>
      </div>
      </div>
      {/* <h1 className="project-title">{props.name}</h1> */}
      <h3>Stack: {props.stack}</h3>
      <ul className="bpList">
        <li>{props.description[0]}</li>
        <li>{props.description[1]}</li>
        <li>{props.description[2]}</li>
      </ul>
      <iframe title="video" width="560" height="275" src={props.vidURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  );

  // {props.name}
}

export default Project;
