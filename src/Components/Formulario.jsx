import React from 'react'
import { useState } from 'react'

const Formulario = () => {

    const [todo, setTodo] = useState({
        ToDoName: '',
        ToDoDescription: '',
        TodoEstado: 'Pending',
        TodoCheck: false,

    })

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const {ToDoName, ToDoDescription} = todo;
        //Validación
        if (!ToDoName.trim() || !ToDoDescription.trim()){
            console.log('Empty field');
            setError(true);
            return;
        }

            setError(false);


        console.log(todo);
    };

    const handleChange = e => {    
        const {name, value, checked, type} = e.target

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const PintarError = () => {
        <div className="alert alert-danger">Info is requested</div>
    };

  return (
    <>
        <h2>Formulario controlado</h2>
        
        {error && <PintarError/>}

        <form onSubmit={handleSubmit}>
            <input
            name='ToDoName'
            placeholder='Input All'
            type='text'
            className='form-control mb-2'
            onChange={handleChange}
            value={todo.ToDoName}
            />

            <textarea 
            name="ToDoDescription"
            className='form-control mb-2'
            placeholder='Input the To-Do description'
            onChange={handleChange}
            value={todo.ToDoDescription}
            />

            <select 
            name="TodoEstado" 
            className='form-control mb-2'
            onChange={handleChange}
            value={todo.TodoEstado}
            >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>

            <div className="form-check">
                <input 
                id="flexCheckDefault"
                className="form-check-input" 
                type="checkbox"
                name="TodoCheck"
                checked={todo.TodoCheck}
                onChange={handleChange}
                
                />

                <label 
                className="form-check-label" 
                htmlFor="flexCheckDefault"
                >
                    Priority
                </label>
            </div>


            <button type='submit' className='btn btn-primary'>Add</button>
        </form>
    </>
  )
}

export default Formulario