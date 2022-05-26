import classnames from 'classnames';
import styles from './button.module.scss';

interface IButtonProps {
    value: string;
    className?: string;
}

const ButtonMain = ({value, className}: IButtonProps) => {
    return <button className={classnames(className, styles.button)}>{value}</button>
}

export default ButtonMain;
