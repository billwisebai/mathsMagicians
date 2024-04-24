import { Link } from 'react-router-dom';
import styles from './index.module.css';

const ListQuestions = ({ questions }) => {
    return (
        <article className={styles.questions}>
            <Link to={`math_questions/${questions.id}`} >
                <h3>{questions.title}</h3>
            </Link>
            <p className={styles.questionsDate} >{questions.datetime}</p>
            <p className={styles.questionsQuantity} >Quantity: {questions.quantity}</p>
        </article>
    )
}

export default ListQuestions
