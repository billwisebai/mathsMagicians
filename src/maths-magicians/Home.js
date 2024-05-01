import { useStoreState } from 'easy-peasy';
import ListQuestions from './ListQuestions'
import styles from './index.module.css';


const Home = ({ mathError, mathIsLoading, iconError, iconIsloading }) => {
    console.log("home");

    const mathQuestions = useStoreState((state) => state.mathQuestions);

    return (
        <main className={styles.home}>
            {(mathIsLoading || iconIsloading) && <p className={styles.statusMsg}>Loading Maths Questions...</p>}
            {!mathIsLoading && !iconIsloading && (mathError || iconError) && <p className={`${styles.statusMsg} ${styles.errorMsg}`}>{mathError ? mathError : iconError}</p>}
            {!mathIsLoading && !iconIsloading && !mathError && !iconError && (mathQuestions.length > 0 ?
                (mathQuestions.map((questions) => (
                    <section key={questions.id} >
                        <ListQuestions questions={questions} />
                    </section>
                )))
                : (
                    <p className={styles.statusMsg}> No Maths Questions to display</p>
                ))
            }
        </main>
    )
}

export default Home
