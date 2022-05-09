import React from 'react'

const Home = ({counter,incrementarContador,decrementarContador}) => {
  return (
    <div>
      <div className='card'>{counter.count}</div>
      <button className='btn btn-outline-success' onClick={incrementarContador}>Incrementar</button>
      <button className='btn btn-outline-danger' onClick={decrementarContador}>Decrementar</button>
    </div>
  )
}

export default Home