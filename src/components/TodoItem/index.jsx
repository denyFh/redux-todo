import React from 'react';
import './todoitem.css';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck, deleteTodo } from '../../features/todoSlice';

const Todoitem = ({name, done, id}) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  const deleteHandler = () => {
    dispatch(deleteTodo(id));
  }

  return (
    <div className='todoItem'>
      <Checkbox 
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'secondary checked' }}
      />
      {/* name */}
      <p className={`name ${done && 'todoItem--done'}`}>{name}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default Todoitem