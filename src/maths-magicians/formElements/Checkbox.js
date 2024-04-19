import styles from '../index.module.css';

const Checkbox = ({ }) => {
    return (
        <section className={styles.operations}>
            <label>Operatioins: </label>
            <input type='checkbox' name='addition' value='+' />
            <label htmlFor='addition'>+ Addition</label>
            <input type='checkbox' name='subtraction' value='-' />
            <label htmlFor='subtraction'>- Substraction</label>
            <input type='checkbox' name='multiplication' value='*' />
            <label htmlFor='multiplication'>* Multiplication</label>
            <input type='checkbox' name='division' value='/' />
            <label htmlFor='division'>/ Division</label>
        </section>
    )
}

export default Checkbox
