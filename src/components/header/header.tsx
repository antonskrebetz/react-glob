import logo from '../../assets/netflixroulette.svg';
import TextInput from '../textInput/textInput';
import ButtonMain from '../buttonMain/buttonMain';
import ButtonAddMovie from '../buttonAddMovie/buttonAddMovie';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" />
                <ButtonAddMovie value={'+ add movie'} />
            </div>
            <div className={styles.searchBar}>
                <h1 className={styles.title}>FIND YOUR MOVIE</h1>
                <div className={styles.searchPanel}>
                    <TextInput placeholder='What do you want to watch?' />
                    <ButtonMain value={'Search'} className={styles.searchButton}/>
                </div>
            </div>
        </div>
  )
}

export default Header;