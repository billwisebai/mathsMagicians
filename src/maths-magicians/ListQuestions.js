import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { useStoreState } from 'easy-peasy';

const ListQuestions = ({ questions }) => {

    const currentIcon = useStoreState((state) => state.currentIcon);

    return (
        <article className={styles.questions}>
            {questions.isArchived && currentIcon.name ?
                <img className={styles.homePageIcon} src={require(`../icons/${currentIcon.name} with color.png`)} alt='home page icon' />
                : <div className={styles.homePageIcon}></div>}
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
