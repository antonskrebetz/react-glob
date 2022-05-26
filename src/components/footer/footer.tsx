import logo from '../../assets/netflixroulette.svg';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Footer;
