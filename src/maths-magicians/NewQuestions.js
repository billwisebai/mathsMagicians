import { format } from "date-fns"
import { useNavigate } from "react-router-dom"
import styles from './index.module.css';
import InputForm from "./InputForm"
import getCurrentDate from "../tools/getCurrentDate"
import ListItems from "./ListItems"
import { useStoreActions, useStoreState } from "easy-peasy";

const NewQuestions = () => {
  const mathQuestions = useStoreState((state) => state.mathQuestions);
  const allQuestions = useStoreState((state) => state.allQuestions);
  const questionQuantity = useStoreState((state) => state.questionQuantity);
  const setAllQuestions = useStoreActions((actions) => actions.setAllQuestions);
  const saveQuestions = useStoreActions((actions) => actions.saveQuestions);
  const currentDate = getCurrentDate();
  const navigate = useNavigate();

  const handleSave = async () => {
    const questions = {
      id: mathQuestions.length > 0 ? String(Number(mathQuestions[mathQuestions.length - 1].id) + 1) : '1',
      title: "Maths Magicians " + currentDate,
      datetime: format(new Date(), 'MMMM dd, yyyy pp'),
      quantity: questionQuantity,
      body: allQuestions,
    }
    saveQuestions(questions);
    navigate('/')
  }

  const handleCancel = () => {
    setAllQuestions([]);
  }

  return (
    <main className={styles.newQuestions}>
      <InputForm />
      {allQuestions.length > 0 &&
        <div className={styles.questionsBox}>
          <section className={styles.questionTitleSection}>
            <section >
              <h2 className={styles.title}>Maths Magicians ({currentDate})</h2>
              <h3 className={styles.title}>Total questions: {questionQuantity}</h3>
            </section>
            <section className={styles.submitResetButton}>
              <button className={styles.submit} onClick={handleSave} >Save</button>
              <button className={styles.reset} onClick={handleCancel}>Cancel</button>
            </section>
          </section>
          <section>
            <ListItems list={allQuestions} />
          </section>
        </div>
      }
    </main>
  )
}

export default NewQuestions
