import { useState } from "react";
import getCurrentDate from "../tools/getCurrentDate";
import ListItems from "./ListItems";
import styles from './index.module.css';
import InputForm from "./InputForm";

const MathsMagicians = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [questionQuantity, setQuestionQuantity] = useState(0);
    const [printing, setPrinting] = useState(false);
    const currentDate = getCurrentDate();

    const printQuestions = () => {
        setPrinting(true);
        setTimeout(() => {
            window.print();
            setPrinting(false);
        }, 0);
    }

    return (
        <main className={styles.main}>
            {!printing &&
                <>
                    <h1>*/add input data form and button to print/*</h1>
                    <InputForm
                        allQuestions={allQuestions}
                        setAllQuestions={setAllQuestions}
                        questionQuantity={questionQuantity}
                        setQuestionQuantity={setQuestionQuantity}
                    />
                </>
            }
            <h1 className={styles.title}>Maths Magicians ({currentDate})</h1>
            <h2 className={styles.title}>Total questions: {questionQuantity}</h2>
            {!printing &&
                <section className={styles.printSection}>
                    <button className={styles.submit} onClick={printQuestions}>Print</button>
                </section>
            }
            <section>
                {allQuestions.length > 0 && <ListItems list={allQuestions} />}
            </section>
        </main>
    )
}

export default MathsMagicians;