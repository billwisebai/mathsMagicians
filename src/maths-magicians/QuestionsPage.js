import { Link, useNavigate, useParams } from "react-router-dom"
import styles from './index.module.css';
import ListItems from "./ListItems";
import { useStoreActions, useStoreState } from "easy-peasy";

const QuestionsPage = () => {
    console.log("postpage");
    const navigate = useNavigate();
    const { id } = useParams();
    const printing = useStoreState((state) => state.printing);
    const printMathQuestion = useStoreActions((actions) => actions.printMathQuestion)
    const editQuestions = useStoreActions((actions) => actions.editQuestions)
    const deleteQuestions = useStoreActions((actions) => actions.deleteQuestions)
    const getMathQuestionById = useStoreState((actions) => actions.getMathQuestionById);
    const mathQuestion = getMathQuestionById(id);
    const currentIcon = useStoreState((state) => state.currentIcon);

    const handleDelete = async () => {
        deleteQuestions(id);
        navigate('/');
    }

    const handleIconClick = () => {
        editQuestions({ ...mathQuestion, isArchived: !mathQuestion.isArchived });
    }

    return (
        <main className={styles.questionsPage}>
            {mathQuestion ?
                (
                    <article>
                        <section className={styles.questionTitleSection}>
                            <section>
                                <h2 className={styles.title}>{mathQuestion.title}</h2>
                                <h3 className={styles.title}>Total questions: {mathQuestion.quantity}</h3>
                            </section>
                            {!printing && <section className={styles.submitResetButton}>
                                <button className={styles.submit} onClick={printMathQuestion} >Print</button>
                                {!mathQuestion.isArchived && <button className={styles.reset} onClick={handleDelete} >Delete</button>}
                            </section>}
                        </section>
                        <section>
                            <ListItems list={mathQuestion.body} />
                        </section>
                        {currentIcon.name && <img className={styles.questionPageIcon} src={mathQuestion.isArchived ? require(`../icons/${currentIcon.name} with color.png`) : require(`../icons/${currentIcon.name} without color.png`)} alt="pikachu with color" onClick={handleIconClick} />}
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
