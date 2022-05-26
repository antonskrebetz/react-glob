import MovieCard from "../movieCard/movieCard";
import poster from '../../assets/poster.png';
import styles from './movieList.module.scss';

type Opt<T> = T | null;

type TMoviesItem = {
    poster_path: string;
    genre_ids: number[];
    id: number;
    title: string;
    release_date: string;
}

type TProps = {
    data: Opt<TMoviesItem[]>;
}

const MovieList = ({ data }: TProps): JSX.Element => {
    return (
        <>
            <p className={styles.movieCounter}><span>39</span>movies found</p>
            <div className={styles.movies}>
                {
                    data 
                        ? data.map(el => 
                        <MovieCard
                            key={el.id} 
                            id={el.id}
                            title={el.title}
                            alt={el.title} 
                            poster={poster}
                            releaseDate={el.release_date}
                            genres={['Criminal', 'Drama']}
                        />)
                        : null
                }
            </div>
        </>
    )
}

export default MovieList;