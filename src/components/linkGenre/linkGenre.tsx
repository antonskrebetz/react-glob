import styles from './linkGenre.module.scss';

interface ILinkGenreProps {
    href: string;
    text: string;
}

const LinkGenre = ({href, text}: ILinkGenreProps) => {
    return <a className={styles.linkGenre} href={href}>{text}</a>
}

export default LinkGenre;