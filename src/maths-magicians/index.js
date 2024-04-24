import { useEffect } from "react";
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
import { useStoreState, useStoreActions } from "easy-peasy";

const MathsMagicians = () => {
    const printing = useStoreState((state) => state.printing);
    const setMathQuestions = useStoreActions((actions) => actions.setMathQuestions)
    const { data, error, isLoading } = useAxiosFetch('http://localhost:3500/math_questions')

    useEffect(() => {
        setMathQuestions(data);
    }, [data, setMathQuestions])

    return (
        <Router>
            <section className={styles.app} >
                {!printing && <Header title="Maths Magicians " />}
                {!printing && <Nav />}
                <Routes>
                    <Route path="/" element={<Home error={error} isLoading={isLoading} />} />
                    <Route path="/math_questions" element={<NewQuestions />} />
                    <Route path="/math_questions/:id" element={<QuestionsPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Missing />} />
                </Routes>
                {!printing && <Footer />}
            </section>
        </Router>
    )
}

export default MathsMagicians;