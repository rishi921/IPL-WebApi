import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../redux/playerSlice';
import './PlayerForm.css';

function PlayerForm() {
    const [playerName, setPlayerName] = useState('');
    const [teamId, setTeamId] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playerName && teamId) {
            dispatch(addPlayer({ playerName, teamId }));
            setPlayerName('');
            setTeamId('');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="player-form-container">
            <h2>Add New Player</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Player Name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Team ID"
                    value={teamId}
                    onChange={(e) => setTeamId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <button type="submit">Add Player</button>
            </form>
        </div>
    );
}

export default PlayerForm;
