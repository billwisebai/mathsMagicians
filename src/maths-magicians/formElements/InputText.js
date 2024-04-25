import styles from './formElements.module.css';

const InputText = ({ name, type = 'string', text, setText }) => {
    const handleChange = (e) => {
        if (e.target.value !== ' ') {
            if (type === 'number') {
                if (!isNaN(e.target.value)) {
                    setText(e.target.value.trim());
                }
            } else {
                setText(e.target.value.trim());
            }
        }
    }
    return (
        <section className={styles.inputText}>
            <label className={styles.label}>{name}: </label>
            <input
                type='text'
                placeholder={name}
                value={text}
                onChange={handleChange}
            />
        </section>
    )
}

export default InputText
