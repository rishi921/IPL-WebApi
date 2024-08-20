import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../features/matches/matchesSlice';
import './MatchesList.css';

const MatchesList = () => {

    const dispatch = useDispatch();
    const { matches, loading } = useSelector((state) => state.matches);

    useEffect(() => {
        dispatch(fetchMatches());

    }, [dispatch]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="matches-list">

            {matches.map((match) => (
                <div key={match.id} className="match-card">


                    <h3>{match.team1} vs {match.team2}</h3>
                    <p>Date: {match.match_date}</p>

                    <p>Venue: {match.venue}</p>
                    
                </div>
            ))}
        </div>

    );
};

export default MatchesList;
