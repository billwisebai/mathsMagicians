import { Link } from "react-router-dom"
import styles from './index.module.css';

const Missing = () => {
    console.log("missing");

    return (
        <main className={styles.missing}>
            <h2>Math Questions Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/' >Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default Missing
