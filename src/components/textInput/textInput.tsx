import styles from './textInput.module.scss';

interface ITextInput {
    placeholder: string;
}

const TextInput = ({placeholder}: ITextInput) => {
    return <input className={styles.input} type="text" placeholder={placeholder}/>
}

export default TextInput;
