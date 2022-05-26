import styles from './buttonAddMovie.module.scss';

interface IButtonProps {
    value: string;
}

const ButtonAddMovie = ({value}: IButtonProps) => {
    return <button className={styles.buttonAddMovie}>{value}</button>
}

export default ButtonAddMovie;