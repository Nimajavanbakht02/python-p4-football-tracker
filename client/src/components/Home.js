import React from "react";
import { Link } from "react-router-dom";

function Home({ teams }) {
  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>
              {team.name} ({team.city})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
