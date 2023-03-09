import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>


      <li className="nav-item">
        <NavLink
          to="/react-portfolio/about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/header"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Header
        </NavLink>
      </li>
      <li className="nav-item">

          

        <NavLink
          to="/react-portfolio/project"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project
        </NavLink>
      </li>
      

      <li className="nav-item">
        <NavLink
          to="/react-portfolio/gallery"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Gallery
        </NavLink>
      </li>

 



      <li className="nav-item">
        <NavLink
          to="/react-portfolio/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>


      {/* <li className="nav-item">
        <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Learn
        </NavLink>
      </li> */}
    </ul>
  );
}

export default NavTabs;
