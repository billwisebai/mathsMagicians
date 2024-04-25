import { action, computed, createStore, thunk } from "easy-peasy";
import api from '../api/axios';

export default createStore({
    mathQuestions: [],
    setMathQuestions: action((state, payload) => {
        state.mathQuestions = payload;
    }),
    printing: false,
    setPrinting: action((state, payload) => {
        state.printing = payload;
    }),
    allQuestions: [],
    setAllQuestions: action((state, payload) => {
        state.allQuestions = payload;
    }),
    questionQuantity: [],
    setQuestionQuantity: action((state, payload) => {
        state.questionQuantity = payload;
    }),
    getMathQuestionById: computed((state) => {
        return (id) => state.mathQuestions.find(mathQuestion => mathQuestion.id === id);
    }),
    saveQuestions: thunk(async (actions, questions, helpers) => {
        const { mathQuestions } = helpers.getState();
        try {
            const response = await api.post('/math_questions', questions);
            actions.setMathQuestions([...mathQuestions, response.data]);
            actions.setAllQuestions([]);
            actions.setQuestionQuantity(0);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    editQuestions: thunk(async (actions, updateQuestions, helpers) => {
        const { mathQuestions } = helpers.getState();
        const { id } = updateQuestions;
        try {
            const response = await api.put(`/math_questions/${id}`, updateQuestions);
            actions.setMathQuestions(mathQuestions.map(item => item.id === id ? { ...response.data } : item));
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    deleteQuestions: thunk(async (actions, id, helpers) => {
        const { mathQuestions } = helpers.getState();
        try {
            await api.delete(`/math_questions/${id}`)
            actions.setMathQuestions(mathQuestions.filter(item => item.id !== id));
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }),
    printMathQuestion: thunk((actions) => {
        actions.setPrinting(true);
        setTimeout(() => {
            window.print();
            actions.setPrinting(false);
        }, 0);
    }),
});