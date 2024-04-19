const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return day + '-' + month + '-' + year;
}
export default getCurrentDate;
