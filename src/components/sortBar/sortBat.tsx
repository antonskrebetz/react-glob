import LinkGenre from '../../common/linkGenre/linkGenre';
import styles from './sortBar.module.scss';

const SortBat = () => {
    const genres: string[] = ['all', 'documentary', 'comedy', 'horror', 'crime'];

    return (
        <>
            <div className={styles.sortBar}>
                <div className={styles.genresBlock}>
                    {genres.map(link => (
                        <LinkGenre href={link} text={link}/>
                    ))}
                </div>
                <div className={styles.dropdownWrapper}>
                    <p className={styles.sortBy}>Sort by</p>
                    <select className={styles.select} name="genre" id="genre">
                        <option value="release date" selected>release date</option>
                        <option value="most popular">most popular</option>
                    </select>
                </div>
            </div>
            <div className={styles.hr} />
        </>
    )
}

export default SortBat;