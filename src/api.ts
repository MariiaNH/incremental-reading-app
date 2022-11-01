import { MovieData } from './TYPES/MovieData';
import { ResponseError } from './TYPES/ResponseError';

const API_URL = 'https://www.omdbapi.com/?apikey=your-key';

export function getMovie(query: string): Promise<MovieData | ResponseError> {
  return fetch(`${API_URL}&t=${query}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}