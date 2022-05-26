import errorGif from './errorMessage.gif';
import styles from './errorMessage.module.scss';

const ErrorMessage = (): JSX.Element => {
    return (
        <img className={styles.errorImg} src={errorGif} alt="Error"/>
    )
}

export default ErrorMessage;