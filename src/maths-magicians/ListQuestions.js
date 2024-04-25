import { Link } from 'react-router-dom';
import styles from './index.module.css';
import PikachuWithColor from '../icons/Pikachu with color.png';

const ListQuestions = ({ questions }) => {
    return (
        <article className={styles.questions}>
            {questions.isArchived ? 
                <img className={styles.homePageIcon} src={PikachuWithColor} alt='is archived' /> : <div className={styles.homePageIcon}></div>}
            <section>
                <Link to={`math_questions/${questions.id}`} >
                    <h3>{questions.title}</h3>
                </Link>
                <p className={styles.questionsDate} >{questions.datetime}</p>
                <p className={styles.questionsQuantity} >Quantity: {questions.quantity}</p>
            </section>
        </article>
    )
}

export default ListQuestions
