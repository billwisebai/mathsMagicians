import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import DataContext from "../context/DataContext";
import api from "../api/posts";
import { format } from "date-fns";
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

const EditPostWithPosts = ({ posts, setPosts }) => {
	console.log("editpost");

	const [editPost, setEditPost] = useState({ title: '', body: '' });
	const { id } = useParams();
	const post = posts.find(item => item.id === id);
	const navigate = useNavigate();

	useEffect(() => {
		if (post) {
			setEditPost({ title: post.title, body: post.body });
		}
	}, [post, setEditPost])

	const handleEdit = async (id) => {
		try {
			const updatePost = {
				id,
				title: editPost.title,
				datetime: format(new Date(), 'MMMM dd, yyyy pp'),
				body: editPost.body,
			}
			const response = await api.put(`/posts/${id}`, updatePost);
			setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
			setEditPost({ title: '', body: '' });
			navigate('/');
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	}

	return (
		<main className={styles.postPage}>
			{post &&
				<>
					<h2>Edit Post</h2>
					<form className={styles.newPostForm} onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="postTitle">Title:</label>
						<input
							id='postTitle'
							type="text"
							placeholder="Post Title"
							required
							value={editPost.title}
							onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
						/>
						<label htmlFor="postBody">Post:</label>
						<textarea
							id='postBody'
							type="text"
							placeholder="Post Body"
							required
							value={editPost.body}
							onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
						/>
						<button onClick={() => handleEdit(id)} >Submit</button>
					</form>
				</>
			}
			{!post &&
				<>
					<h2>Post Not Found</h2>
					<p>Well, that's disappointing.</p>
					<p>
						<Link to='/' >Visit Our Homepage</Link>
					</p>
				</>
			}
		</main>
	)
}

const EditPost = withPosts(EditPostWithPosts);

// const EditPost = () => {
//   console.log("editpost");     

//   const { posts, setPosts } = useContext(DataContext);
//   const [ editPost, setEditPost ] = useState({ title: '', body: '' }); 
//   const { id } = useParams();
//   const post = posts.find(item => item.id === id);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if(post) {
//       setEditPost({title: post.title, body: post.body});
//     }
//   }, [post, setEditPost])

//   const handleEdit = async (id) => {
//     try {
//       const updatePost = {
//         id,
//         title: editPost.title,
//         datetime: format(new Date(), 'MMMM dd, yyyy pp'),
//         body: editPost.body,
//       }
//       const response = await api.put(`/posts/${id}`, updatePost);
//       setPosts(posts.map(post => post.id === id ? {...response.data} : post));
//       setEditPost({ title: '', body: '' });
//       navigate('/');
//     } catch (err) {
//       console.log(`Error: ${err.message}`);
//     }
//   }

//   return (
//     <main className="postPage">
//       { post &&
//         <>
//           <h2>Edit Post</h2>
//           <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
//               <label htmlFor="postTitle">Title:</label>
//               <input 
//                   id='postTitle'
//                   type="text"
//                   placeholder="Post Title"
//                   required 
//                   value={editPost.title}
//                   onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
//               />
//               <label htmlFor="postBody">Post:</label>
//               <textarea 
//                   id='postBody'
//                   type="text"
//                   placeholder="Post Body"
//                   required
//                   value={editPost.body}
//                   onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
//               />
//               <button onClick={() => handleEdit(id)} >Submit</button>
//           </form>
//         </>
//       }
//       { !post && 
//         <>
//           <h2>Post Not Found</h2>
//           <p>Well, that's disappointing.</p>
//           <p>
//               <Link to='/' >Visit Our Homepage</Link>
//           </p>  
//         </>
//       }
//     </main>
//   )
// }

export default EditPost
