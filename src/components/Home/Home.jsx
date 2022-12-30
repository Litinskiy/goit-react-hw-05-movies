import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'services/fetchMovies';

export function Home() {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      const trendMovies = await getTrendMovies();
      setTrends([...trendMovies]);
    }
    getMovies();
  }, []);

  return (
    <>
      {trends.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </>
  );
}
