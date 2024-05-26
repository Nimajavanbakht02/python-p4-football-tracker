import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import CreateTeamForm from './CreateTeamForm';
import CreatePlayerForm from './CreatePlayerForm';
import CreateGameForm from './CreateGameForm';
import axios from 'axios';

function App() {
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);
    const [performances, setPerformances] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios.get('/teams').then(response => setTeams(response.data));
        axios.get('/players').then(response => setPlayers(response.data));
        axios.get('/games').then(response => setGames(response.data));
        axios.get('/performances').then(response => setPerformances(response.data));
    }, []);

    const handleDeleteTeam = (teamId) => {
        if (location.pathname === '/') {
            axios.delete(`/teams/${teamId}`)
              .then(() => {
                    // Update the teams state to remove the deleted team
                    setTeams(teams.filter(team => team.id!== teamId));
                })
              .catch(error => console.error('Error deleting team:', error));
        }
    };

    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<CreateTeamForm />} />
                <Route path="/create-player" element={<CreatePlayerForm />} />
                <Route path="/create-game" element={<CreateGameForm />} />
            </Routes>
            <div>
                <h1>NFL Management System</h1>
                <h2>Teams</h2>
                <ul>
                    {teams.map(team => (
                        <li key={team.id}>
                            {team.name} ({team.city})
                            <button onClick={() => handleDeleteTeam(team.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <h2>Players</h2>
                <ul>
                    {players.map(player => (
                        <li key={player.id}>{player.name} - {player.position}</li>
                    ))}
                </ul>
                <h2>Games</h2>
                <ul>
                    {games.map(game => (
                        <li key={game.id}>{game.date}</li>
                    ))}
                </ul>
                <h2>Performances</h2>
                <ul>
                    {performances.map(performance => (
                        <li key={performance.id}>Score: {performance.score}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;