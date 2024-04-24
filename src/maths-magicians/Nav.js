import { Link } from 'react-router-dom'
import styles from './index.module.css';

const Nav = ({search, setSearch}) => {
    console.log("nav");

    return (
        <nav className={styles.nav}>
            {/* <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="searchPost"></label>
                <input
                    id='search'
                    type='text'
                    placeholder='Search Post'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form> */}
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
