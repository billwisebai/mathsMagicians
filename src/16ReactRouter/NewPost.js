import React, { useContext, useState } from "react"
import DataContext from "../context/DataContext"
import api from "../api/posts"
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"
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

const NewPostWithPosts = ({ posts, setPosts }) => {
  console.log("newpost");     

  const [ newPost, setNewPost ] = useState({ title: '', body: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      id: posts.length ? String(Number(posts[posts.length - 1].id) + 1) : '1',
      title: newPost.title,
      datetime: format(new Date(), 'MMMM dd, yyyy pp'),
      body: newPost.body,
    }
    try {
      const response = await api.post('/posts', post);
      setPosts([...posts, response.data]);
      setNewPost({ title: '', body: '' });
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  return (
    <main className={styles.newPost}>
      <h2>New Post</h2>
      <form className={styles.newPostForm} onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input 
              id='postTitle'
              type="text"
              placeholder="Post Title"
              required 
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <label htmlFor="postBody">Post:</label>
          <textarea 
              id='postBody'
              type="text"
              placeholder="Post Body"
              required
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <button onClick={handleSubmit} >Submit</button>
      </form>
    </main>
  )
}

const NewPost = withPosts(NewPostWithPosts);

// const NewPost = () => {
//   console.log("newpost");     

//   const { posts, setPosts } = useContext(DataContext);
//   const [ newPost, setNewPost ] = useState({ title: '', body: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const post = {
//       id: posts.length ? String(Number(posts[posts.length - 1].id) + 1) : '1',
//       title: newPost.title,
//       datetime: format(new Date(), 'MMMM dd, yyyy pp'),
//       body: newPost.body,
//     }
//     try {
//       const response = await api.post('/posts', post);
//       setPosts([...posts, response.data]);
//       setNewPost({ title: '', body: '' });
//       navigate('/');
//     } catch (err) {
//       console.log(`Error: ${err.message}`);
//     }
//   }
//   return (
//     <main className="newPost">
//       <h2>New Post</h2>
//       <form className="newPostForm" onSubmit={handleSubmit}>
//           <label htmlFor="postTitle">Title:</label>
//           <input 
//               id='postTitle'
//               type="text"
//               placeholder="Post Title"
//               required 
//               value={newPost.title}
//               onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//           />
//           <label htmlFor="postBody">Post:</label>
//           <textarea 
//               id='postBody'
//               type="text"
//               placeholder="Post Body"
//               required
//               value={newPost.body}
//               onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
//           />
//           <button onClick={handleSubmit} >Submit</button>
//       </form>
//     </main>
//   )
// }

export default NewPost
