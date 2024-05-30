import React, { useState } from 'react';
import axios from 'axios';
import { CloudinaryContext, Image } from 'cloudinary-react';

function CreateFantasyTeam({ players }) {
    const [teamName, setTeamName] = useState('');
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [logoUrl, setLogoUrl] = useState('');
    const [createdTeam, setCreatedTeam] = useState(null);
console.log(players)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTeam = {
            name: teamName,
            logoUrl: logoUrl,
            players: selectedPlayers
        };
        try {
            // Send a POST request to the server to create the fantasy team
            const response = await axios.post('/fantasy-teams', newTeam);
            setCreatedTeam(response.data); // Set the created team data
            setTeamName(''); // Reset the team name input
            setSelectedPlayers([]); // Clear the selected players
            setLogoUrl(''); // Clear the logo URL
        } catch (error) {
            console.error('Error creating fantasy team:', error);
        }
    };

    const handlePlayerSelect = (playerId) => {
        // Toggle player selection
        setSelectedPlayers(prevSelectedPlayers => {
            if (prevSelectedPlayers.includes(playerId)) {
                // If player is already selected, remove it
                return prevSelectedPlayers.filter(id => id !== playerId);
            } else {
                // If player is not selected, add it
                return [...prevSelectedPlayers, playerId];
            }
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        uploadFile(file);
    };

    const uploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset
            const response = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData);
            setLogoUrl(response.data.secure_url);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
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
                <div>
                    <label>Upload Logo:</label>
                    <input type="file" onChange={handleFileChange} accept="image/*" />
                </div>
                <button type="submit">Create Team</button>
            </form>
            {logoUrl && (
                <div>
                    <h2>Uploaded Logo</h2>
                    <CloudinaryContext cloudName="your_cloud_name">
                        <Image publicId={logoUrl} />
                    </CloudinaryContext>
                </div>
            )}
            {createdTeam && (
                <div>
                    <h2>Created Team</h2>
                    <p>Team Name: {createdTeam.name}</p>
                    <p>Selected Players:</p>
                    <ul>
                        {createdTeam.players && createdTeam.players.map(player => (
                            <li key={player.id}>{player.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CreateFantasyTeam;
