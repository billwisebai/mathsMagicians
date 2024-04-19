// import React, { useState } from 'react'
// import { FaTrashAlt } from 'react-icons/fa'
import ListItems from './ListItems'

const Content = ({ items, handleCheck, handleDelete}) => {
    // // state setting won't re render
    // const [name, setName] = useState("Nan");
    // const [count, setCount] = useState(0);
    // const handleNameChange = () => {
    //     const names = ['Ethan', 'Jia', 'Nan'];
    //     const int = Math.floor(Math.random() * 3)
    //     setName(names[int]);
    // }
    // // Check re render
    // console.log('name: ', name);
    // console.log('count: ', count);
    // const handleClick = () => {
    //     console.log("You clicked it");
    // }
    // const handleClick2 = (name) => {
    //     console.log(`${name} clicked it`);
    // }
    // const handleClick3 = (e) => {
    //     console.log(e.target.innerHTML);
    // }
    // const handleClick4 = () => {
    //     // count didn't change in this function, so only add 1
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     console.log(count);
    // }
    // const handleClick5 = (name) => {
    //     console.log(count);
    // }
    // const [items, setItems] = useState([
    //   {
    //     id: 1,
    //     checked: true,
    //     item: "Item 1"
    //   },
    //   {
    //     id: 2,
    //     checked: false,
    //     item: "Item 2"
    //   },
    //   {
    //     id: 3,
    //     checked: false,
    //     item: "Item 3"
    //   }
    // ])
    // const handleCheck = (id) => {
    //   console.log(`key: ${id}`);
    //   const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    //   setItems(listItems);
    // }
    // const handleDelete = (id) => {
    //   const newListItems = items.filter((item) => item.id !== id);
    //   setItems(newListItems);
    // }
  return (
    <section>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to see details.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p onDoubleClick={handleClick}>{name}</p> */}
        {/* <p>Hello {handleNameChange()}!</p> */}
        {/* <p>Hello {name}!</p>
        <button onClick={handleNameChange}>Change Name</button> */}
        {/* <button onClick={() => handleClick2("Nan")}>Click it</button>
        <button onClick={(e) => handleClick3(e)}>Click it</button> */}
        {/* <button onClick={handleClick4}>Click it</button>
        <button onClick={handleClick5}>Click it</button> */}
        {items.length ? (
          // <ul>
          //   {items.map((item) => (
          //     <li className='item' key={item.id}>
          //       <input
          //         type='checkbox'
          //         onChange={() => handleCheck(item.id)}
          //         checked = {item.checked}
          //       />
          //       <label
          //         style={item.checked ? { textDecoration: 'line-through'} : null}
          //         onDoubleClick={() => handleCheck(item.id)}
          //       >{item.item}</label>
          //       <FaTrashAlt
          //         role='button'
          //         tabIndex='0'
          //         onClick={() => handleDelete(item.id)}
          //       />
          //     </li>
          //   ))}
          // </ul>
          <ListItems
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          />
        ) : (
          <label>Your list is empty</label>
        )}
    </section>
  )
}

export default Content
