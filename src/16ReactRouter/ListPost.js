import { Link } from 'react-router-dom';
import styles from './index.module.css';

const ListPost = ({ post, postBodyLength }) => {
  return (
    <article className={styles.post}>
        <Link to={`post/${post.id}`} >
            <h3>{post.title}</h3>
        </Link>
        <p className={styles.postDate} >{post.datetime}</p>
        <p className={styles.postBody} >{post.body.length <= postBodyLength ? post.body : `${post.body.slice(0, postBodyLength)}...`}</p>
    </article>
  )
}

export default ListPost
