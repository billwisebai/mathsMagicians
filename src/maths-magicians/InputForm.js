import { useState } from 'react';
import InputText from './formElements/InputText';
import NumberRange from './formElements/NumberRange';
import styles from './index.module.css';
import createMathQuestion from '../tools/createMathQuestion';
import { useStoreActions } from 'easy-peasy';

const InputForm = () => {
    const setAllQuestions = useStoreActions((actions) => actions.setAllQuestions);
    const setQuestionQuantity = useStoreActions((actions) => actions.setQuestionQuantity);

    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [operations, setOperations] = useState([]);
    const [quantity, setQuantity] = useState('');

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setOperations([...operations, value]);
        } else {
            setOperations(operations.filter((item) => item !== value));
        }
    };

    const handleSubmit = () => {
        setAllQuestions([]);
        if (min && max && operations.length > 0 && quantity) {
            let totalQuantity = 0;
            if (Array.isArray(operations) && operations.length > 0) {
                if (operations.includes('-')) {
                    totalQuantity = (max - min + 1) * (operations.length - 1) * (max - min + 1) + (1 + (max - min)) * (max - min) / 2;
                } else {
                    totalQuantity = (max - min + 1) * operations.length * (max - min + 1);
                }
            }
            if (quantity > totalQuantity) {
                return (
                    <h4 className={styles.warning}>The quantity is larger than the total possible quantity</h4>
                )
            }
            let questions = [];
            let number = quantity;
            while (number > 0) {
                let question = createMathQuestion(Number(min), (Number(max) + 1), operations);
                if (question && !questions.includes(question)) {
                    questions.push(question);
                    number--;
                }
            }
            setAllQuestions(questions);
            setQuestionQuantity(quantity);
        }
    };
    const handleReset = () => {
        setMin('');
        setMax('');
        setOperations([]);
        setQuantity('');
        setAllQuestions([]);
        setQuestionQuantity(0);
    };

    return (
        <form className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
            <NumberRange
                name='Number'
                min={min}
                setMin={setMin}
                max={max}
                setMax={setMax}
            />
            <section className={styles.operations}>
                <label>Operations: </label>
                <div className={styles.checkboxOptions}>
                    <div>
                        <input
                            type='checkbox'
                            name='addition'
                            value='+'
                            checked={operations.includes('+')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor='addition'>+ Addition</label>
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            name='subtraction'
                            value='-'
                            checked={operations.includes('-')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor='subtraction'>- Substraction</label>
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            name='multiplication'
                            value='*'
                            checked={operations.includes('*')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor='multiplication'>* Multiplication</label>
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            name='division'
                            value='/'
                            checked={operations.includes('/')}
                            onChange={handleCheckboxChange} />
                        <label htmlFor='division'>/ Division</label>
                    </div>
                </div>
            </section>
            <InputText
                name='Question Quantity'
                type='number'
                text={quantity}
                setText={setQuantity}
            />
            <section className={styles.submitResetButton}>
                <button className={styles.submit} onClick={handleSubmit} >Submit</button>
                <button className={styles.reset} onClick={handleReset} >Reset</button>
            </section>
        </form>
    )
}

export default InputForm
