import React, { useState, useEffect } from 'react';

function CreateFantasyTeam({ players }) {
    const [teamName, setTeamName] = useState('');
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [notification, setNotification] = useState('');

    // Load data from local storage when the component mounts
    useEffect(() => {
        const storedTeamName = localStorage.getItem('teamName');
        const storedSelectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers'));

        if (storedTeamName) setTeamName(storedTeamName);
        if (storedSelectedPlayers) setSelectedPlayers(storedSelectedPlayers);
    }, []);

    // Save data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('teamName', teamName);
        localStorage.setItem('selectedPlayers', JSON.stringify(selectedPlayers));
    }, [teamName, selectedPlayers]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demonstration purposes, let's just log the data
        console.log("Team Name:", teamName);
        console.log("Selected Players:", selectedPlayers);
        setNotification('Team information updated.');
        // Here you can perform any action you want with the form data
    };

    const handlePlayerSelect = (playerId) => {
        setSelectedPlayers(prevSelectedPlayers => {
            if (prevSelectedPlayers.includes(playerId)) {
                return prevSelectedPlayers.filter(id => id !== playerId);
            } else {
                return [...prevSelectedPlayers, playerId];
            }
        });
    };

    return (
        <div>
            <h1>Create Fantasy Team</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Team Name:</label>
                    <input
                        type="text"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Select Players:</label>
                    <ul>
                        {players && players.map(player => (
                            <li key={player.id}>
                                <input
                                    type="checkbox"
                                    value={player.id}
                                    checked={selectedPlayers.includes(player.id)}
                                    onChange={() => handlePlayerSelect(player.id)}
                                />
                                {player.name} - {player.position}
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="submit">Create Team</button>
            </form>
            {notification && <div>{notification}</div>}
            <div>
                {teamName && (
                    <div>
                        <h2>Team Information</h2>
                        <div>
                            <strong>Team Name:</strong> {teamName}
                        </div>
                        <div>
                            <strong>Selected Players:</strong>
                            <ul>
                                {selectedPlayers.map(playerId => (
                                    <li key={playerId}>{players.find(player => player.id === playerId).name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CreateFantasyTeam;
