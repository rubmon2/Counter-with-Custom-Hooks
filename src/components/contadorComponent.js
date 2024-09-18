import React, { useContext } from 'react'
import { useCounter } from '../hooks/useCounter'

export const ContadorComponent = () => {

 //customhooks
    const {contador, incremento, reseteo,decremento}=useCounter(10)

  return (
  <>
<h1>Contador {contador}</h1>
<button className='btn btn-primary' onClick={()=>incremento(1)} >+1</button>
<button className='btn btn-danger' onClick={()=>reseteo()} >reset</button>
<button className='btn btn-primary' onClick={()=>decremento(1,true)} >-1</button>

  </>
  )
}
