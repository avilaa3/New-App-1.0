import React, {Fragment} from 'react'

const Contador = () => {

    const [count, setCount] = React.useState(0);

  return (
    <Fragment>
        <h2>Contador</h2>
        <p>You have clicked the button { count } times</p>
        <h4>
          {
            count > 2 ? 'Es mayor a dos' : 'Es menor a dos'
          }
        </h4>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </Fragment>
  )
}

export default Contador