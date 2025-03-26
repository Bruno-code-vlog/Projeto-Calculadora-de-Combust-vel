
import { useState, FormEvent } from 'react'
import './App.css'
import logoimg from './assets/logo.png'

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAcoolInput] = useState(0)

  function calcular(event: FormEvent){
    event.preventDefault();

    let calculo = (alcoolInput / gasolinaInput)

    if(calculo <= 0.7){
      alert('Compensa usar alcool')
    }else{
      alert('Compensa usar gasolina')
    }

  }


  return (
      <div>
        <main className='container'>
          <img src={logoimg} alt="Logo da calculadora" />
        </main>

        <h1 className='title'>Qual melhor opção ?</h1>

        <form className='form' onSubmit={calcular}>
          <label> Alcool ( preço pro litro):</label>
          <input className="input" 
          type='number'
          placeholder='4,90'
          min = "1"
          step="0.01"
          required
          value={alcoolInput}
          onChange={ (e) => setAcoolInput(Number(e.target.value)) }
          />

          <label> Gasolina ( preço pro litro):</label>
          <input className="input" 
          type='number'
          placeholder='4,90'
          min = "1"
          step="0.01"
          required
          value={gasolinaInput}
          onChange={ (e) => setGasolinaInput(Number(e.target.value)) }
          />

        <input className="button" type="submit" value="Calcular" />
        </form>
      </div>
  )
}

export default App
