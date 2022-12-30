import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchMovies';
import {
  BackLink,
  DetailsLink,
  Poster,
  SecondaryTitle,
  Wrapper,
} from './MovieDetails.styled';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const {
    genres = [],
    title,
    overview,
    vote_average,
    poster_path,
  } = movieDetails;

  useEffect(() => {
    async function getMovies() {
      const moviesData = await getMovieDetails(movieId);
      setMovieDetails({ ...moviesData });
    }
    getMovies();
  }, [movieId]);

 

  return (
    <>
      <BackLink to={backLinkHref}>&#8592; Go back</BackLink>
      <Wrapper>
        <Poster
          src={
          poster_path !== undefined
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : ''
        }
          alt="poster"
        />
        <div>
          <h2>{title}</h2>
          <p>{vote_average}</p>
          <SecondaryTitle>Overviews</SecondaryTitle>
          <p>{overview}</p>
          <SecondaryTitle>Genres</SecondaryTitle>
          <p>{genres.map(({ name }) => `${name} `)}</p>
          <DetailsLink to={'cast'} state={{ from: backLinkHref }}>
            Cast
          </DetailsLink>
          <DetailsLink to={'reviews'} state={{ from: backLinkHref }}>
            Reviews
          </DetailsLink>
        </div>
      </Wrapper>
      <Outlet />
    </>
  );
}

export default MovieDetails;