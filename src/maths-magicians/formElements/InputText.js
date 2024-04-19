import styles from './formElements.module.css';

const InputText = ({ name, type = 'string', text, setText }) => {
    const handleChange = (e) => {
        if (type === 'number') {
            if (!isNaN(e.target.value)) {
                setText(e.target.value)
            }
        } else {
            setText(e.target.value)
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
