import { useState, useEffect } from "react";
import styles from './index.module.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewQuestions from "./NewQuestions";
// import EditQuestions from "./EditQuestions";
import QuestionsPage from "./QuestionsPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import useAxiosFetch from "../hooks/useAxiosFetch";

const MathsMagicians = () => {
    const [mathQuestions, setMathQuestions] = useState([]);
    const [printing, setPrinting] = useState(false);
    const { data, error, isLoading } = useAxiosFetch('http://localhost:3500/math_questions')

    useEffect(() => {
        setMathQuestions(data);
    }, [data])

    return (
        <Router>
            <section className={styles.app} >
                {!printing && <Header title="Maths Magicians " />}
                {!printing && <Nav />}
                <Routes>
                    <Route path="/" element={<Home mathQuestions={mathQuestions} error={error} isLoading={isLoading} />} />
                    <Route path="/math_questions" element={<NewQuestions mathQuestions={mathQuestions} setMathQuestions={setMathQuestions} />} />
                    {/* <Route path="/edit/:id" element={<EditQuestions />} /> */}
                    <Route path="/math_questions/:id" element={<QuestionsPage mathQuestions={mathQuestions} setMathQuestions={setMathQuestions} printing={printing} setPrinting={setPrinting} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Missing />} />
                </Routes>
                {!printing && <Footer />}
            </section>
        </Router>
    )
}

export default MathsMagicians;