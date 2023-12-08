import { useState, useCallback } from 'react';
import ItemList from '../components/ItemList';

export default function Home() {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('');
    const addItem = useCallback(() => {
        const newItem = `Item ${items.length + 1}`;
        setItems(prevItems => [...prevItems, newItem]);
        setMessage('Item added successfully!');

        // Clear message after 3 seconds
        setTimeout(() => {
            setMessage('');
        }, 3000);
    }, [items]);


    return (
        <div>
            <button onClick={addItem} >Add Item</button>
            <ItemList items={items} />
            {message && <p id='message'>{message}</p>}
        </div>
    );
}
