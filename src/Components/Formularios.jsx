import React from 'react'

const Formularios = () => {

    const [fruit, setFruit] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [lista, setLista] = React.useState([])


    const saveData = (e) => {
        e.preventDefault()
        

        if (!fruit.trim()) {
            console.log('Fruit row empty');
            return
        }

        if (!description.trim()) {
            console.log('Desription row empty');
            return
        }

        console.log('Processing data...' + fruit + ' ' + description);
        setLista([
            ...lista,
            {Name: fruit, Detail: description}
        ])

        e.target.reset()
        setFruit('')
        setDescription('')
    }

  return (
    <div>
        <h2>Information entry</h2>
        <div>
            <form onSubmit={ saveData }>
            <input 
            type="text" 
            className='form-control mb-2' 
            placeholder='Insert fruit'
            onChange={ (e) => setFruit(e.target.value) }/>

            <input 
            type="text" 
            className='form-control mb-2' 
            placeholder='Insert description'
            onChange={ (e) => setDescription(e.target.value)}/>

            <button className="btn btn-primary btn-block" type='submit'>ADD</button>
            </form>

        </div>
        <div className="mb-3">
            <h3 className='mb-2'>Results</h3>
            <ul className='list-group'>
            {
                lista.map((item, index) => (
                    <li key={index} class="list-group-item mb-2">
                        {item.Name} - {item.Detail}
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
  )
}

export default Formularios