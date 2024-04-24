import { Link, useNavigate, useParams } from "react-router-dom"
import styles from './index.module.css';
import ListItems from "./ListItems";
import api from '../api/axios'

const QuestionsPage = ({ mathQuestions, setMathQuestions, printing, setPrinting }) => {
    console.log("postpage");
    const navigate = useNavigate();
    const { id } = useParams();
    const mathQuestion = mathQuestions.find(questions => questions.id === id);

    const handlePrint = () => {
        setPrinting(true);
        setTimeout(() => {
            window.print();
            setPrinting(false);
        }, 0);
    }

    const handleDelete = async () => {
        try {
            await api.delete(`/math_questions/${id}`)
            const newMathQuestions = mathQuestions.filter(item => item.id !== id);
            setMathQuestions(newMathQuestions);
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    return (
        <main className={styles.questionsPage}>
            {mathQuestion ?
                (
                    <article>
                        <section className={styles.questionTitleSection}>
                            <section >
                                <h2 className={styles.title}>({mathQuestion.title})</h2>
                                <h3 className={styles.title}>Total questions: {mathQuestion.quantity}</h3>
                            </section>
                            {!printing && <section className={styles.submitResetButton}>
                                <button className={styles.submit} onClick={handlePrint} >Print</button>
                                <button className={styles.reset} onClick={handleDelete} >Delete</button>
                            </section>}
                        </section>
                        <section>
                            <ListItems list={mathQuestion.body} />
                        </section>
                    </article>
                ) : (
                    <>
                        <h2>Post Not Found</h2>
                        <p>well, that's disappointing.</p>
                        <p>
                            <Link to='/' >Visit Our Homepage</Link>
                        </p>
                    </>
                )
            }
        </main>
    )
};

export default QuestionsPage
