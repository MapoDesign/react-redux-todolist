import React, {
  useRef
} from 'react';
import { connect } from 'react-redux';
import { addTodo,deleteTodo } from './actions';
import './App.css';
import './ToDoList/ToDoList.css'

const initTodos = [
  {
    name: 'Call my mum',
    dueDate: new Date().toLocaleDateString(),
    user_id : 1
  },
   {
    name: 'Go to school',
    dueDate: new Date().toLocaleDateString(),
    user_id : 1
  },
    {
    name: 'Do my homework',
    dueDate: new Date().toLocaleDateString(),
    user_id : 1
  }

];

function App({addTodo, deleteTodo,todos}) {
 
  

  const todoEl = useRef('');
  const manageClick = (e) => {
     e.preventDefault();
    addTodo(todoEl.current.value);
  }
 
  return (
    <div className="App container-fluid">
      <div className="">
         <h1>MY TODO LIST</h1>
        <div className="panel panel-default">
          <form className='panel-heading'>
              <input ref = {todoEl} className="form-control" name="todo" id="todo" placeholder="Add a new task..." autofocus />
               <button onClick ={manageClick} className="btn btn-success">ADD</button>
           
          </form>
     
      <ul id="task-list m-0">
        {
              todos.map(todo => <li key={todo.name} className="list-group-item">{todo.name}
              <button onClick={() => deleteTodo(todo)} className="close">x</button>
              </li>)
        }
          </ul>
          </div>
     </div>
    </div>
  );
}
const matchStateToProps = (state) => {
  return { todos: [...state] };
}
/*const mapDispatchToPros = (dispatch) => {
  return {
    addTodo: name => dispatch(addTodo(name)),
    deleteTodo: todo => dispatch(deleteTodo(todo))
  }
}
*/
const createConnector = connect(matchStateToProps,{addTodo, deleteTodo} );
export default createConnector(App);
