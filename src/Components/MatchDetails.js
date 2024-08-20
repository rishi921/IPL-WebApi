import React, { useEffect, useState } from 'react';

function MatchDetails() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5139/api/matches')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMatches(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Match Details</h2>
            {matches.length > 0 ? (
                <ul>
                    {matches.map((match) => (
                        <li key={match.id}>
                            <p>Date: {match.matchDate}</p>
                            <p>Teams: {match.team1} vs {match.team2}</p>
                            <p>Venue: {match.venue}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No matches found.</p>
            )}
        </div>
    );
}

export default MatchDetails;