
const createMathQuestion = (min, max, operations) => {
    let question = '';
    if (operations && operations.length > 0) {
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const rndInt1 = Math.floor(Math.random() * (max - min)) + min;
        const rndInt2 = Math.floor(Math.random() * (max - min)) + min;
        switch (operation) {
            case '+':
                question = rndInt1 + operation + rndInt2;
                break;
            case '-':
                question = rndInt1 > rndInt2 ? rndInt1 + operation + rndInt2 : (rndInt1 < rndInt2 ? rndInt2 + operation + rndInt1 : '');
                break;
            case '*':
                question = rndInt1 + operation + rndInt2;
                break;
            case '/':
                question = rndInt1 * rndInt2 + operation + rndInt1;
                break;
            default:
                break;
        }
    }
    return question ? (question + '=') : '';
}

export default createMathQuestion
