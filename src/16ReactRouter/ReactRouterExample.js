import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from 'react-router-dom';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import api from "../api/posts";
// import useWindowSize from "../hooks/useWindowSize";
// import useAxiosFetch from "../hooks/useAxiosFetch";
import { DataProvider } from "../context/DataContext";
import styles from './index.module.css';

const ReactRouterExample = () => {
	// const postBodyLength = 25;
	// // const [ posts, setPosts] = useState([
	// //   {
	// //     id: '1',
	// //     title: 'Post 1',
	// //     datetime: 'July 01, 2023 11:03:28 PM',
	// //     body: 'Post 1 content some some some some some'
	// //   },
	// //   {
	// //     id: '2',
	// //     title: 'Post 2',
	// //     datetime: 'July 31, 2023 11:03:28 PM',
	// //     body: 'Post 2 content some some some some some'
	// //   }
	// // ]);
	// const [ posts, setPosts] = useState([]);
	// const [ newPost, setNewPost ] = useState({ title: '', body: '' }); 
	// const [ editPost, setEditPost ] = useState({ title: '', body: '' }); 
	// const [ search, setSearch ] = useState('');
	// const [ searchResults, setSearchResults ] = useState([]);
	// const navigate = useNavigate();
	// const { width } = useWindowSize();
	// const { data, error, isLoading } = useAxiosFetch('http://localhost:3500/posts')

	// useEffect(() => {
	//   setPosts(data);
	// },[data])

	// // useEffect(() => {
	// //   const fetchPosts = async () => {
	// //     try {
	// //       const response = await api.get('/posts');
	// //       setPosts(response.data);
	// //     } catch (err) {
	// //         console.log(`Error: ${err.message}`);
	// //     }
	// //   };
	// //   fetchPosts();
	// // },[]);

	// useEffect(() => {
	//   const searchPosts = posts.filter(post => (post.body.toLowerCase()).includes(search.toLowerCase()) || (post.title.toLowerCase()).includes(search.toLowerCase())) 
	//   setSearchResults(searchPosts.reverse());
	// }, [posts, search])

	// const handleSubmit = async (e) => {
	//   e.preventDefault();
	//   const post = {
	//     id: posts.length ? String(Number(posts[posts.length - 1].id) + 1) : '1',
	//     title: newPost.title,
	//     datetime: format(new Date(), 'MMMM dd, yyyy pp'),
	//     body: newPost.body,
	//   }
	//   try {
	//     const response = await api.post('/posts', post);
	//     setPosts([...posts, response.data]);
	//     setNewPost({ title: '', body: '' });
	//     navigate('/');
	//   } catch (err) {
	//     console.log(`Error: ${err.message}`);
	//   }
	// }
	// const handleEdit = async (id) => {
	//   try {
	//     const updatePost = {
	//       id,
	//       title: editPost.title,
	//       datetime: format(new Date(), 'MMMM dd, yyyy pp'),
	//       body: editPost.body,
	//     }
	//     const response = await api.put(`/posts/${id}`, updatePost);
	//     setPosts(posts.map(post => post.id === id ? {...response.data} : post));
	//     setEditPost({ title: '', body: '' });
	//     navigate('/');
	//   } catch (err) {
	//     console.log(`Error: ${err.message}`);
	//   }
	// }
	// const handleDelete = async (id) => {
	//   try {
	//     await api.delete(`/posts/${id}`)
	//     const newPosts = posts.filter(post => post.id !== id);
	//     setPosts(newPosts);
	//     navigate('/');
	//   } catch (err) {
	//     console.log(`Error: ${err.message}`);
	//   }
	// }

	return (
		<section className={styles.app}>
			<Header title='React JS Blog' />
			<DataProvider>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post" element={<NewPost />} />
					<Route path="/edit/:id" element={<EditPost />} />
					<Route path="/post/:id" element={<PostPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/*" element={<Missing />} />
				</Routes>
			</DataProvider>
			<Footer />
		</section>
	)
}

export default ReactRouterExample
