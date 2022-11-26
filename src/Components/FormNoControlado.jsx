import React, { useRef } from 'react'

const FormNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const datos = new FormData(formulario.current);
        // console.log(...datos.entries());

        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos);

        const {ToDoDescription,ToDoName,TodoEstado} = objetoDatos
        if (!ToDoDescription.trim() || !ToDoName.trim()) {
            console.log('Some field is empty, please review your info!');
            return
        }

        console.log('Ok to continue');

    };
    

  return (
    <div>
        <h2>Formulario no controlado</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input
            name='ToDoName'
            placeholder='Input All'
            type='text'
            className='form-control mb-2'
            defaultValue='Task #1'
            />
            <textarea 
            name="ToDoDescription"
            className='form-control mb-2'
            placeholder='Input the To-Do description'
            defaultValue='Description Task #1'
            />
            <select 
            name="TodoEstado" 
            className='form-control mb-2'
            defaultValue='Choose an option'
            >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <button type='submit' className='btn btn-primary'>Add</button>
        </form>
    </div>
  )
}

export default FormNoControlado