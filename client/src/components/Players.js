// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Players() {
//     const [players, setPlayers] = useState([]);

//     useEffect(() => {
//     axios.get('/players').then(response => setPlayers(response.data));
//     }, []);

//     return (
//     <div>
//         <h2>Players</h2>
//         < ul>
//         {players.map(player => (
//             <li key={player.id}>{player.name} - {player.position}</li>
//         ))}
//         </ul>
//     </div>
//     );
// }

// export default Players;
