import React from 'react';

function PlayerList({ players }) {
    return (
        <div>
            <h1>Players</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>
                        <a href={`#player-${player.id}`}>
                            {player.name} - {player.position}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;
