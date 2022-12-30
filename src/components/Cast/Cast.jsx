import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/fetchMovies';
import { Item, List, Portrait } from './Cast.styled';

function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const { cast } = await getMovieCast(movieId);
      setActors([...cast]);
    }
    getCast();
  }, [movieId]);

  return (
    <List>
      {actors.map(({ character, name, profile_path, id }, idx) => {
        return idx < 12 ? (
          <Item key={id}>
            <Portrait
              src= {profile_path !== null
            ? `https://image.tmdb.org/t/p/w200${profile_path}` : ''}
              alt="portret"
            />
            <h3>{name}</h3>
            <p>
              <b>Character: </b>
              <span>{character}</span>
            </p>
          </Item>
        ) : null;
      })}
    </List>
  );
}

export default Cast;
