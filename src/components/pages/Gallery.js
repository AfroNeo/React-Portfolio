import React from "react";
import Project from "./Project";
// import your individual image files here, naming them uniquely (ie. for each project);
// import project1 from './images/project1Jumbotron.png

function Gallery() {
  // const projectNameArray = ['Project1', 'Project2', 'Project3'];

  return (
    <>
      <div>
        <h1 className="text-center">Gallery</h1>
        
        <p>
          Welcome to my Gallery of past Projects I have worked on or been involved in. 
          <br></br>
          <br></br>
          <strong>Click on the thumbnail for more details:</strong>
        </p>
      </div>
      <div className="row justify-content-evenly">
        <Project />
        {/* <Project image={project1}/> */}
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />

      </div>

    </>
  );

}

export default Gallery;
