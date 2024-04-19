import ListPost from './ListPost'
import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import styles from './index.module.css';

const withProps = (Component) => {
    const MemoComponent = React.memo(Component);
    return () => {
        const { 
            searchResults, error, isLoading 
        } = useContext(DataContext);
        return <MemoComponent 
                    searchResults={searchResults}
                    error={error}
                    isLoading={isLoading}
                />
    }
}

const HomeWithProps = ({ searchResults, error, isLoading }) => {
    console.log("home");
    // console.log(searchResults, error, isLoading);
    
    const postBodyLength = 25;
    
  return (
    <main className={styles.home}>
        {isLoading && <p className={styles.statusMsg}>Loading posts...</p>}
        {!isLoading && error && <p className={`${styles.statusMsg} ${styles.errorMsg}`}>{error}</p>}
        {!isLoading && !error && (searchResults.length ? 
            (searchResults.map((post) => (
                <section key={post.id} >
                    <ListPost post={post} postBodyLength={postBodyLength} /> 
                </section>
            )))
            : (
                <p className={styles.statusMsg}> No posts to display</p>
            ))
        }
    </main>
  )
}

const Home = withProps(HomeWithProps);

// const Home = () => {
//     console.log("home");
    
//     const postBodyLength = 25;
//     const { 
//         searchResults, error, isLoading 
//     } = useContext(DataContext);
    
//   return (
//     <main className="home">
//         {isLoading && <p className='statusMsg'>Loading posts...</p>}
//         {!isLoading && error && <p className='statusMsg errorMsg'>{error}</p>}
//         {!isLoading && !error && (searchResults.length ? 
//             (searchResults.map((post) => (
//                 <section key={post.id} >
//                     <ListPost post={post} postBodyLength={postBodyLength} /> 
//                 </section>
//             )))
//             : (
//                 <p className='statusMsg'> No posts to display</p>
//             ))
//         }
//     </main>
//   )
// }

export default Home
