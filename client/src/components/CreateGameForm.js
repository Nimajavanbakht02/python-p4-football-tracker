import React, { useState } from 'react';
import axios from 'axios';

function CreateGameForm() {
    const [date, setDate] = useState('');
    const [homeTeamId, setHomeTeamId] = useState('');
    const [awayTeamId, setAwayTeamId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/games', { date, home_team_id: homeTeamId, away_team_id: awayTeamId })
            .then(response => {
                console.log(response.data);
                setDate('');
                setHomeTeamId('');
                setAwayTeamId('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Date:
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
                Home Team ID:
                <input type="text" value={homeTeamId} onChange={(e) => setHomeTeamId(e.target.value)} />
            </label>
            <label>
                Away Team ID:
                <input type="text" value={awayTeamId} onChange={(e) => setAwayTeamId(e.target.value)} />
            </label>
            <button type="submit">Create Game</button>
        </form>
    );
}

export default CreateGameForm;
