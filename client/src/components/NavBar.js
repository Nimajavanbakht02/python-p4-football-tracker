// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/create-team">Create Team</Link></li>
        <li><Link to="/create-player">Create Player</Link></li>
        <li><Link to="/create-game">Create Game</Link></li>
        {/* Add other navigation links */}
      </ul>
    </nav>
  );
}

export default NavBar;
