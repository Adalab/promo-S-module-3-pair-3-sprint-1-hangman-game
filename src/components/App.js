import '../styles/App.scss';
import { useState } from 'react';


function App() {

  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('Pepito');
  const [userLetters, setUserLetters] = useState([]);


  function handleBtnIncrease(ev) {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1)
  }

  function handleInput(ev) {
    const inputLetter = ev.target.value;
    let regex = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*$', 'u');
    if (regex.test(inputLetter)) {
      setLastLetter(inputLetter);
    } else {
      console.log('Letra no válida')
    }
    setUserLetters(inputLetter);

  }

  function renderSolutionLetters(ev) {
    //fraccionamos la palabra dentro del array, cada letra será un elemento del array:
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      if (letter.toLowerCase() === userLetters) {
        return <li key={index} className="letter">{letter}</li>
      } else {
        return <li key={index} className="letter"></li>
      }
    })
  }

  return <div className="App">{
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              //pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+"
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleInput}
            />
          </form>
          <button className="btn-increase" onClick={handleBtnIncrease}>Incrementar</button>

        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  }</div>;
}

export default App;
