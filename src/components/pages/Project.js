import React from "react";
// import Gallery from './Gallery';

function Project({image}) {

  return (
    <div class="card col-3 mx-1 my-2">
      <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
    // <div>
    //   <h1 className="text-center">Project</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii partiendo sed ne, no
    //     mutat ludus aperiri mea, per in choro dolorem electram. Invidunt reprimique assueverit quo
    //     ne, eruditi graecis pro ut. Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
    //   </p>
    // </div>
  );
}

export default Project;
