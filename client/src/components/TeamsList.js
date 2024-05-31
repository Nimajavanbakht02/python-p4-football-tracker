// TeamsList.js
import React from 'react';
import { Link } from 'react-router-dom';

function TeamsList({ teams }) {
    return (
        <div>
            <h2>Teams</h2>
            <ul>
                {teams.map(team => (
                    <li key={team.id}>
                        <Link to={`/teams/${team.id}`}>{team.name} ({team.city})</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeamsList;
