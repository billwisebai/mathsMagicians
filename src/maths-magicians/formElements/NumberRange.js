import styles from './formElements.module.css';

const NumberRange = ({ min, setMin, max, setMax }) => {
    const handleChange = (e, set) => {
        if (!isNaN(e.target.value) && e.target.value !== ' ') {
            set(e.target.value.trim())
        }
    }
    return (
        <section className={styles.numberRange}>
            <label className={styles.label}>Number Range: </label>
            <div>
                <input
                    type='text'
                    placeholder='Min'
                    size={min.length < 4 ? 5 : min.length + 1}
                    value={min}
                    onChange={(e) => handleChange(e, setMin)}
                />
                <label> ~ </label>
                <input
                    type='text'
                    placeholder='Max'
                    size={max.length < 4 ? 5 : max.length + 1}
                    value={max}
                    onChange={(e) => handleChange(e, setMax)}
                />
            </div>
        </section>
    )
}

export default NumberRange
