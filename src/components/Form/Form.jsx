import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { registerForm } from '../../redux/actions'
import style from '../Form/Form.module.css'


function validate(input) {
  let error = {}
  if (!input.email) {
    error.email = 'Ingresa un email válido'
  }
  return error
}


export default function Form() {

  const dispatch = useDispatch
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    email: '',
  })

  function handleSubmit(e) {
    let x = input.email
    if (!input.email) {
      e.preventDefault();
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value
        })
      )
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x) === true) {
      e.preventDefault();
      setErrors(
        {emailError:"Ingresa un email válido"}
      )
    }else{
      e.preventDefault();
      dispatch(registerForm(input))
      alert("Gracias por suscribirte")
      setInput(
        {email:''}
      )
    }
  }


  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <Row>
    <form action="https://formspree.io/f/mwkzbkye" method="post">
      <div>
        <input 
        
        type='email'
        id='email'
        placeholder="Ingresa tu email"
        value={input.email}
        name="email"
        onChange={handleChange}
        />
        {errors.email && (
                  <strong>
                    <span className={style.validationError}>
                      {errors.email}
                    </span>
                  </strong>
                )}
      </div>
      <button to='/' >Enviar</button>
      </form>  
      
    </Row>
  )
        }
  

