import React, { useState } from 'react'

export const useCounter = (valorinicial = 0) => {

    const[contador,setContador]=useState(valorinicial)

const incremento=(valor = 1)=>{
setContador(contador +valor)
}
const reseteo=()=>{
    setContador(valorinicial)
}
const decremento=(valor = 1, negativo)=>{
    if(negativo&&contador <1)return
    setContador(contador -valor)


}

//return objeto, fnx 
  return {
    contador,
    incremento,
    reseteo,
    decremento
  }
}
