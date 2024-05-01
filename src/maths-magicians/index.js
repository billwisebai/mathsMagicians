import { useEffect } from "react";
import styles from './index.module.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewQuestions from "./NewQuestions";
import QuestionsPage from "./QuestionsPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { useStoreState, useStoreActions } from "easy-peasy";
import Settings from "./Settings";

const MathsMagicians = () => {
    const printing = useStoreState((state) => state.printing);
    const setMathQuestions = useStoreActions((actions) => actions.setMathQuestions);
    const setCurrentIcon = useStoreActions((actions) => actions.setCurrentIcon);
    const setIcons = useStoreActions((actions) => actions.setIcons);
    const mathData = useAxiosFetch('http://localhost:3500/maths_magicians');
    const iconData = useAxiosFetch('http://localhost:3500/icons');

    useEffect(() => {
        if (mathData.data.length > 0) {
            setMathQuestions(mathData.data);
        }
    }, [mathData, setMathQuestions]);

    useEffect(() => {
        if (iconData.data.length > 0) {
            setIcons(iconData.data);
            const currentIcon = iconData.data.find(icon => icon.current === true);
            if (currentIcon) {
                setCurrentIcon(currentIcon);
            }
        }
    }, [iconData, setIcons, setCurrentIcon]);

    return (
        <Router>
            <section className={styles.app} >
                {!printing && <Header title="Maths Magicians " />}
                {!printing && <Nav />}
                <Routes>
                    <Route path="/" element={<Home mathError={mathData.error} mathIsLoading={mathData.isLoading} iconError={iconData.error} iconIsLoading={iconData.isLoading} />} />
                    <Route path="/math_questions" element={<NewQuestions />} />
                    <Route path="/math_questions/:id" element={<QuestionsPage />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Missing />} />
                </Routes>
                {!printing && <Footer />}
            </section>
        </Router>
    )
}

export default MathsMagicians;