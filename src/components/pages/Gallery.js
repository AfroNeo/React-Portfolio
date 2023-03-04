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
          Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii partiendo sed ne, no
          mutat ludus aperiri mea, per in choro dolorem electram. Invidunt reprimique assueverit quo
          ne, eruditi graecis pro ut. Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
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
