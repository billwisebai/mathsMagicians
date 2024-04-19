import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import styles from './index.module.css';

const withSearch = (Component) => {
    const MemoComponent = React.memo(Component);
    return () => {
        const { search, setSearch } = useContext(DataContext);
        return <MemoComponent search={search} setSearch={setSearch} />
    }
}

const NavWithSearch = ({search, setSearch}) => {
    console.log("nav");

    return (
        <nav className={styles.nav}>
            <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="searchPost"></label>
                <input
                    id='search'
                    type='text'
                    placeholder='Search Post'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul className={styles['nav-link']}>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/post' >New Post</Link>
                </li>
                <li>
                    <Link to='/about' >About</Link>
                </li>
            </ul>
        </nav>
    )
}

const Nav = withSearch(NavWithSearch);

// const Nav = () => {
//     console.log("nav");

//     const { search, setSearch } = useContext(DataContext);
//     return (
//         <nav className='nav'>
//             <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
//                 <label htmlFor="searchPost"></label>
//                 <input
//                     id='search'
//                     type='text'
//                     placeholder='Search Post'
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </form>
//             <ul className='nav-link'>
//                 <li>
//                     <Link to='/' >Home</Link>
//                 </li>
//                 <li>
//                     <Link to='/post' >New Post</Link>
//                 </li>
//                 <li>
//                     <Link to='/about' >About</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

export default Nav
