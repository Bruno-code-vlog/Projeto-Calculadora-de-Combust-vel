import { useState, FormEvent } from 'react';
import './App.css';
import logoimg from './assets/logo.png';

interface InfoProps {
  title: string;
  gasolina: string;
  alcool: string;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps | null>(null);

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = alcoolInput / gasolinaInput;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool",
        gasolina: formataMoeda(gasolinaInput),
        alcool: formataMoeda(alcoolInput)
      });
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formataMoeda(gasolinaInput),
        alcool: formataMoeda(alcoolInput)
      });
    }
  }

  function formataMoeda(valor: number) {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
  }

  return (
    <div>
      <main className='container'>
        <img src={logoimg} alt="Logo da calculadora" />
      </main>

      <h1 className='title'>Qual melhor opção?</h1>

      <form className='form' onSubmit={calcular}>
        <label>Álcool (preço por litro):</label>
        <input
          className="input"
          type='number'
          placeholder='4.90'
          min="1"
          step="0.01"
          required
          value={alcoolInput}
          onChange={(e) => setAlcoolInput(Number(e.target.value))}
        />

        <label>Gasolina (preço por litro):</label>
        <input
          className="input"
          type='number'
          placeholder='4.90'
          min="1"
          step="0.01"
          required
          value={gasolinaInput}
          onChange={(e) => setGasolinaInput(Number(e.target.value))}
        />

        <input className="button" type="submit" value="Calcular" />
      </form>

      {info && (
        <section className='result'>
          <h2 className='result-title'>{info.title}</h2>
          <span>Álcool: {info.alcool}</span>
          <span>Gasolina: {info.gasolina}</span>
        </section>
      )}
    </div>
  );
}

export default App;
