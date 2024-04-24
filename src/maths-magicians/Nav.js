import { Link } from 'react-router-dom'
import styles from './index.module.css';

const Nav = () => {
    console.log("nav");

    return (
        <nav className={styles.nav}>
            <ul className={styles['nav-link']}>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/math_questions' >New Questions</Link>
                </li>
                <li>
                    <Link to='/about' >About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
