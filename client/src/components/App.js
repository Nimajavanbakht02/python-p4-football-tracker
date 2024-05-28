import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import CreateTeamForm from './CreateTeamForm';
import CreatePlayerForm from './CreatePlayerForm';
import CreateGameForm from './CreateGameForm';
import axios from 'axios';
import '../index.css'; // Ensure this path is correct

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
                    setTeams(teams.filter(team => team.id !== teamId));
                })
              .catch(error => console.error('Error deleting team:', error));
        }
    };

    return (
        <div className="App">
            <header>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Teams</a>
                    <a href="#">Scores</a>
                </nav>
            </header>
            <main>
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
                                <span>{team.name} ({team.city})</span>
                                <button onClick={() => handleDeleteTeam(team.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Players</h2>
                    <ul>
                        {players.map(player => (
                            <li key={player.id}>
                                <span>{player.name} - {player.position}</span>
                            </li>
                        ))}
                    </ul>
                    <h2>Games</h2>
                    <ul>
                        {games.map(game => (
                            <li key={game.id}>
                                <span>{game.date}</span>
                            </li>
                        ))}
                    </ul>
                    <h2>Performances</h2>
                    <ul>
                        {performances.map(performance => (
                            <li key={performance.id}>
                                <span>Score: {performance.score}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <footer>
                <div className="footer-content">
                    <div className="footer-nav">
                        <a href="#">Home</a>
                        <a href="#">Teams</a>
                        <a href="#">Scores</a>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <p>&copy; 2024 NFL Management System. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
