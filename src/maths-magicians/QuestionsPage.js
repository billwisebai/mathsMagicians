import { Link, useNavigate, useParams } from "react-router-dom"
import styles from './index.module.css';
import ListItems from "./ListItems";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import Result from "./Result";

const QuestionsPage = () => {
    console.log("postpage");
    const navigate = useNavigate();
    const { id } = useParams();
    const [showResult, setShowResult] = useState(false);
    const printing = useStoreState((state) => state.printing);
    const printMathQuestion = useStoreActions((actions) => actions.printMathQuestion)
    const updateQuestions = useStoreActions((actions) => actions.updateQuestions)
    const deleteQuestions = useStoreActions((actions) => actions.deleteQuestions)
    const getMathQuestionById = useStoreState((actions) => actions.getMathQuestionById);
    const mathQuestion = getMathQuestionById(id);
    const currentIcon = useStoreState((state) => state.currentIcon);

    const handleDelete = async () => {
        deleteQuestions(id);
        navigate('/');
    }

    const handleIconClick = () => {
        if (mathQuestion.result.length === 0) {
            updateQuestions({ ...mathQuestion, isArchived: !mathQuestion.isArchived });
        }
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
                                {(mathQuestion.isArchived || mathQuestion.result.length > 0) && <button className={styles.submit} onClick={() => setShowResult(!showResult)} >{showResult ? 'Hide' : 'Show'} Result</button>}
                                {!mathQuestion.isArchived && mathQuestion.result.length === 0 && <button className={styles.reset} onClick={handleDelete} >Delete</button>}
                            </section>}
                        </section>
                        {!printing && showResult && <Result mathQuestion={mathQuestion} />}
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
