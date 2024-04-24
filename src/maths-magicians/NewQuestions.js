import { useState } from "react"
import api from "../api/axios"
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"
import styles from './index.module.css';
import InputForm from "./InputForm"
import getCurrentDate from "../tools/getCurrentDate"
import ListItems from "./ListItems"

const NewQuestions = ({ mathQuestions, setMathQuestions }) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [questionQuantity, setQuestionQuantity] = useState(0);
  const currentDate = getCurrentDate();
  const navigate = useNavigate();

  const handleSave = async () => {
    const questions = {
      id: mathQuestions.length > 0 ? String(Number(mathQuestions[mathQuestions.length - 1].id) + 1) : '1',
      title: "Maths Magicians " + currentDate,
      datetime: format(new Date(), 'MMMM dd, yyyy pp'),
      quantity: questionQuantity,
      body: allQuestions,
    }
    try {
      const response = await api.post('/math_questions', questions);
      setMathQuestions([...mathQuestions, response.data]);
      setAllQuestions([]);
      setQuestionQuantity(0);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleCancel = () => {
    setAllQuestions([]);
  }

  // const printQuestions = () => {
  //   setPrinting(true);
  //   setTimeout(() => {
  //     window.print();
  //     setPrinting(false);
  //   }, 0);
  // }
  // console.log("newpost");     

  // const [ newPost, setNewPost ] = useState({ title: '', body: '' });
  // const navigate = useNavigate();

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
  return (
    <main className={styles.newQuestions}>
      <InputForm
        allQuestions={allQuestions}
        setAllQuestions={setAllQuestions}
        questionQuantity={questionQuantity}
        setQuestionQuantity={setQuestionQuantity}
      />
      {allQuestions.length > 0 &&
        <div className={styles.questionsBox}>
          <section className={styles.questionTitleSection}>
            <section >
              <h2 className={styles.title}>Maths Magicians ({currentDate})</h2>
              <h3 className={styles.title}>Total questions: {questionQuantity}</h3>
            </section>
            <section className={styles.submitResetButton}>
              <button className={styles.submit} onClick={handleSave} >Save</button>
              <button className={styles.reset} onClick={handleCancel}>Cancel</button>
            </section>
          </section>
          <section>
            <ListItems list={allQuestions} />
          </section>
        </div>
      }
      {/* <h2>New Post</h2>
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
      </form> */}
    </main>
  )
}

export default NewQuestions
