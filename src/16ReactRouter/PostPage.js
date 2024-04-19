import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import DataContext from "../context/DataContext";
import api from "../api/posts"
import styles from './index.module.css';

const withPosts = (Component) => {
    const MemoComponent = React.memo(Component);
    return () => {
        const { posts, setPosts } = useContext(DataContext);
        return <MemoComponent 
                    posts={posts}
                    setPosts={setPosts}
                />
    }
}

const PostPageWithPosts = ({ posts, setPosts }) => {
    console.log("postpage");
    // console.log(posts, setPosts);

    const { id } = useParams();
    const post = posts.find(post => post.id === id);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
          await api.delete(`/posts/${id}`)
          const newPosts = posts.filter(post => post.id !== id);
          setPosts(newPosts);
          navigate('/');
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }
    return (
        <main className={styles.postPage}>
            {post ? 
                (
                    <article>
                        <h2>{post.title}</h2>
                        <p className={styles.postDate}>{post.datetime}</p>
                        <p className={styles.postBody}>{post.body}</p>
                        <Link to={`/edit/${id}`}><button className={styles.editButton}>Edit Post</button></Link>
                        <button className={styles.deleteButton} onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>

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

const PostPage = withPosts(PostPageWithPosts);

// const PostPage = () => {
//     console.log("postpage");     

//     const { posts, setPosts } = useContext(DataContext);
//     const { id } = useParams();
//     const post = posts.find(post => post.id === id);
//     const navigate = useNavigate();

//     const handleDelete = async (id) => {
//         try {
//           await api.delete(`/posts/${id}`)
//           const newPosts = posts.filter(post => post.id !== id);
//           setPosts(newPosts);
//           navigate('/');
//         } catch (err) {
//           console.log(`Error: ${err.message}`);
//         }
//       }
//     return (
//         <main className="postPage">
//             {post ? 
//                 (
//                     <article>
//                         <h2>{post.title}</h2>
//                         <p className="postDate">{post.datetime}</p>
//                         <p className="postBody">{post.body}</p>
//                         <Link to={`/edit/${id}`}><button className="editButton">Edit Post</button></Link>
//                         <button className='deleteButton' onClick={() => handleDelete(post.id)}>
//                             Delete Post
//                         </button>

//                     </article>
//                 ) : (
//                     <>
//                         <h2>Post Not Found</h2>
//                         <p>well, that's disappointing.</p>
//                         <p>
//                             <Link to='/' >Visit Our Homepage</Link>
//                         </p>
//                     </>
//                 )
//             }
//         </main>
//     )
// }

export default PostPage
