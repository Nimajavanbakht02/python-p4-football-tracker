// CreateTeamForm.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateTeamForm() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/teams', { name, city })
            .then(response => {
                console.log(response.data);
                setMessage('Team created successfully!');
                // Reset form fields
                setName('');
                setCity('');
            })
            .catch(error => {
                console.error(error);
                setMessage('Failed to create team.');
            });
    };

    return (
        <div>
            <h2>Create Team</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        City:
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Create Team</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default CreateTeamForm;
