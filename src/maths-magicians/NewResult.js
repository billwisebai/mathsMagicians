import { useEffect, useState } from 'react'
import InputText from './formElements/InputText'
import styles from './index.module.css'
import { useStoreActions } from 'easy-peasy';

const NewResult = ({
    mathQuestion, setEditResult, updatedResult, setUpdatedResult
}) => {
    const [name, setName] = useState('');
    const [questionAnsweredInOneMin, setQuestionAnsweredInOneMin] = useState('');
    const [questionWrongInOneMin, setQuestionWrongInOneMin] = useState('');
    const [timeForRemainingQuestions, setTimeForRemainingQuestions] = useState('');
    const [remainingQuestionsWrong, setRemainingQuestionWrong] = useState('');
    const [warning, setWarning] = useState('');
    const updateQuestions = useStoreActions((actions) => actions.updateQuestions);

    useEffect(() => {
        if (Object.keys(updatedResult).length > 0) {
            setName(updatedResult['Name']);
            setQuestionAnsweredInOneMin(updatedResult['No. of questions answered in 1 min']);
            setQuestionWrongInOneMin(updatedResult['No. of mistakes in 1 min']);
            setTimeForRemainingQuestions(updatedResult['Time taken for remaining questions']);
            setRemainingQuestionWrong(updatedResult['No. of mistakes in remaining questions']);
        }
    }, [updatedResult])

    const handleSubmit = () => {
        if (Number(questionAnsweredInOneMin) > Number(mathQuestion.quantity)) {
            setWarning('Quantity of the Question Answered In One Minute can not be more than total quantity!');
            return false;
        }
        if (name && questionAnsweredInOneMin && questionWrongInOneMin && timeForRemainingQuestions && remainingQuestionsWrong) {
            const newResult = {
                'id': 1,
                'Name': name,
                'No. of questions answered in 1 min': questionAnsweredInOneMin, 'No. of mistakes in 1 min': questionWrongInOneMin,
                'Remaining questions': String(Number(mathQuestion.quantity) - Number(questionAnsweredInOneMin)),
                'Time taken for remaining questions': timeForRemainingQuestions,
                'No. of mistakes in remaining questions': remainingQuestionsWrong
            }
            if (Object.keys(updatedResult).length > 0) {
                newResult.id = updatedResult.id;
                const index = mathQuestion.result.findIndex((item) => item.id === updatedResult.id);
                if (index >= 0) {
                    mathQuestion.result.splice(index, 1, newResult);
                }
            } else {
                if (mathQuestion.result.length > 0) {
                    newResult.id = mathQuestion.result[mathQuestion.result.length - 1].id + 1;
                }
                mathQuestion.result.push(newResult);
            }
            updateQuestions({ ...mathQuestion });
            handleReset();
            setUpdatedResult({});
            setEditResult(false);
        } else {
            setWarning('Please fill all fields!');
        }
    }
    const handleReset = () => {
        setName('');
        setQuestionAnsweredInOneMin('');
        setQuestionWrongInOneMin('');
        setTimeForRemainingQuestions('');
        setRemainingQuestionWrong('');
        setWarning('');
    }
    const handleCancel = () => {
        handleReset();
        setEditResult(false);
    }
    return (
        <section className={styles.newResult}>
            <InputText
                name='Name'
                text={name}
                setText={setName}
            />
            <InputText
                name='No. of questions answered in 1 min'
                type='number'
                text={questionAnsweredInOneMin}
                setText={setQuestionAnsweredInOneMin}
            />
            <InputText
                name='No. of mistakes in 1 min'
                type='number'
                text={questionWrongInOneMin}
                setText={setQuestionWrongInOneMin}
            />
            <InputText
                name='Time taken for remaining questions'
                text={timeForRemainingQuestions}
                setText={setTimeForRemainingQuestions}
            />
            <InputText
                name='No. of mistakes in remaining questions'
                type='number'
                text={remainingQuestionsWrong}
                setText={setRemainingQuestionWrong}
            />
            <section className={styles.submitResetButton}>
                <button className={styles.submit} onClick={handleSubmit} >Submit</button>
                <button className={styles.reset} onClick={handleReset} >Reset</button>
                {mathQuestion.result.length > 0 && <button className={styles.reset} onClick={handleCancel} >Cancel</button>}
            </section>
            {warning && <h4 className={styles.warning}>{warning}</h4>}
        </section>
    )
}

export default NewResult