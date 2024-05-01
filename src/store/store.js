import { action, computed, createStore, thunk } from "easy-peasy";
import api from '../api/axios';

export default createStore({
    mathQuestions: [],
    setMathQuestions: action((state, payload) => {
        state.mathQuestions = payload;
    }),
    icons: [],
    setIcons: action((state, payload) => {
        state.icons = payload;
    }),
    currentIcon: {},
    setCurrentIcon: action((state, payload) => {
        state.currentIcon = payload;
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
            const response = await api.post('/maths_magicians', questions);
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
            const response = await api.put(`/maths_magicians/${id}`, updateQuestions);
            actions.setMathQuestions(mathQuestions.map(item => item.id === id ? { ...response.data } : item));
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    deleteQuestions: thunk(async (actions, id, helpers) => {
        const { mathQuestions } = helpers.getState();
        try {
            await api.delete(`/maths_magicians/${id}`)
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
    editIcons: thunk(async (actions, updateIcons, helpers) => {
        const { icons } = helpers.getState();
        const { id } = updateIcons;
        try {
            const response = await api.put(`/icons/${id}`, updateIcons);
            actions.setIcons(icons.map(item => item.id === id ? { ...response.data } : item));
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
});