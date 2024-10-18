import {React, useState} from 'react'
import Card from './Card'
import { FaTimes } from 'react-icons/fa'


const ComentarioItem = ({comentario, calificacion, id, handleDelete}) => {
 //Manejo del estado de un comentario:
 //Comnetario y calificacion com atributos
 //Mediante el uso de Estados

    const [ comment , setComment]= useState (comentario)
    const [rating, setRating]= useState (calificacion)
    const [identificacion, setIdentificacion]= useState (id) 
  
         

    return (
    <Card reverse={true} >
        <div className='num-display'>{rating}</div>
        <button onClick={()=>handleDelete(identificacion)}
            className='close'
            >
            <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{comment}</div>
        

    </Card>
    
  )
}

export default ComentarioItem