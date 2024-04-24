import ListQuestions from './ListQuestions'
import styles from './index.module.css';

const Home = ({ mathQuestions, error, isLoading }) => {
    console.log("home");

    return (
        <main className={styles.home}>
            {isLoading && <p className={styles.statusMsg}>Loading Maths Questions...</p>}
            {!isLoading && error && <p className={`${styles.statusMsg} ${styles.errorMsg}`}>{error}</p>}
            {!isLoading && !error && (mathQuestions.length > 0 ?
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
