import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Project';

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Name: Matthew Brooks
        <br></br>
        GitHub Profile: AfroNeo
        <br></br>
        LinkedIn Page:
        <br></br>
        Email Address:
        <br></br>
        Downloadable PDF Resume:
        <br></br>
        

      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;
