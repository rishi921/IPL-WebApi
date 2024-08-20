import axios from 'axios';

export const fetchMatchesApi = () => axios.get('/api/matches');
