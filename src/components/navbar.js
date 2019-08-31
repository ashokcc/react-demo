import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
      <nav className="row">
        <div className="col s12">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">Add/Edit User</NavLink>
            </li>
            <li>
              <NavLink to="/summary" exact activeClassName="active">Users Details</NavLink>
            </li>
          </ul>
          </div>
        </nav>
    );
}

export default NavBar;