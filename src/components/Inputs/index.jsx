import React, { useState } from "react";
import './inputs.css';

import { useDispatch } from 'react-redux';
import { saveTodo } from "../../features/todoSlice";

const Inputs = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = (e) => {
        e.preventDefault();
        if (input === '') {
            alert("Anda harus mengisi inputan terlebih dahulu sebelum submit")
        } else {
            dispatch(saveTodo({
                item: input,
                done: false,
                id: Date.now()
            }))
        }
        setInput("");
    }

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
            <form onSubmit={addTodo} className="input-container">
                <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
                <button type="submit" >Add</button>
            </form>
        </div>
    );
}

export default Inputs