import { MouseEventHandler } from 'react';
import { useCallback } from 'react';
import MovieEditButton from '../movieEditButton/movieEditButton';
import styles from './movieCard.module.scss';

type TProps = {
    id: number;
    title: string;
    alt: string;
    poster: string;
    releaseDate: string;
    genres: string[];
}

const MovieCard = ({id, title, alt, poster, releaseDate, genres}: TProps): JSX.Element => {
    const clickOnMovieCard = () => {
        window.scroll(0, 0);
    }

    const clickEditButton: MouseEventHandler<SVGElement> = useCallback((e) => {
        e.stopPropagation();
        console.log('click edit button');
    }, [])

    return (
        <div className={styles.movieCard} key={id} onClick={clickOnMovieCard}>
            <MovieEditButton onClick={clickEditButton}/>
            <img className={styles.img} src={poster} alt={alt}/>
            <div className={styles.infoWrapper}>
                <p className={styles.title}>{title}</p>
                <div className={styles.year}>{releaseDate.slice(0,4)}</div>
            </div>
            <div className={styles.genres}>
                {genres.join(', ')}
            </div>
        </div>
    );
}

export default MovieCard;