import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';
import styles from './index.module.css'

function ShoppingList() {
  // const name = "Nan";
  // const handleNameChange = () => {
  //   const names = ['Ethan', 'Jia', 'Nan'];
  //   const int = Math.floor(Math.random() * 3)
    // return names[int];
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
  const API_URL = "http://localhost:3500/items";
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // localStorage.setItem('shoppingList', JSON.stringify(items));
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        // console.log(listItems)
        setfetchError(null);
        setItems(listItems);
      } catch (err) {
        setfetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems(); 
    }, 1000)
  }, []);

  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem('shoppingList', JSON.stringify(newItems));
  // }
  const addItem = async (item) => {
    const id = items.length ? String(Number(items[items.length - 1].id) + 1) : "1";
    const myNewItem = {id, checked:false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems); 

    const postObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem),
    }
    const result = await apiRequest(API_URL, postObj);
    if (result) setfetchError(result);
  }
  const handleCheck = async (id) => {
    // console.log(`key: ${id}`);
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateObj);
    if (result) setfetchError(result);
  }
  const handleDelete = async (id) => {
    const newListItems = items.filter((item) => item.id !== id);
    setItems(newListItems);

    const deleteObj = { method: 'DELETE' }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteObj);
    if (result) setfetchError(result);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // console.log('Submitted');
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className={styles.shoppingList}>
      <Header title = "Groceries List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <main className={styles.content}>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{ color:'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items = {items.filter(item => item.item.toLowerCase().includes(searchItem.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      
      <Footer length = {items.length}/>
    </div>
  );
}

export default ShoppingList;
