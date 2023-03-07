import '../styles/App.scss';
import { useState } from 'react';


function App() {

  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');


  function handleBtnIncrease(ev) {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1)
  }

  function handleInput(ev) {
    const inputLetter = ev.target.value;

    let regex = new RegExp("^[ñíóáéú a-zA-Z ]+$");
    if (regex.test(inputLetter)) {
      setLastLetter(inputLetter);
    } else {
      console.log('letra no válida')
    }
  }


  return <div className="App">{
    <div class="page">
      <header>
        <h1 class="header__title">Juego del ahorcado</h1>
      </header>
      <main class="main">
        <section>
          <div class="solution">
            <h2 class="title">Solución:</h2>
            <ul class="letters">
              <li class="letter">k</li>
              <li class="letter">a</li>
              <li class="letter"></li>
              <li class="letter">a</li>
              <li class="letter">k</li>
              <li class="letter">r</li>
              <li class="letter"></li>
              <li class="letter">k</li>
              <li class="letter">e</li>
              <li class="letter">r</li>
            </ul>
          </div>
          <div class="error">
            <h2 class="title">Letras falladas:</h2>
            <ul class="letters">
              <li class="letter">f</li>
              <li class="letter">q</li>
              <li class="letter">h</li>
              <li class="letter">p</li>
              <li class="letter">x</li>
            </ul>
          </div>
          <form class="form">
            <label class="title" for="last-letter">Escribe una letra:</label>
            <input
              autocomplete="off"
              class="form__input"
              maxlength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleInput}
            />
          </form>
          <button className="btn-increase" onClick={handleBtnIncrease}>Incrementar</button>

        </section>
        <section class={`dummy error-${numberOfErrors}`}>
          <span class="error-13 eye"></span>
          <span class="error-12 eye"></span>
          <span class="error-11 line"></span>
          <span class="error-10 line"></span>
          <span class="error-9 line"></span>
          <span class="error-8 line"></span>
          <span class="error-7 line"></span>
          <span class="error-6 head"></span>
          <span class="error-5 line"></span>
          <span class="error-4 line"></span>
          <span class="error-3 line"></span>
          <span class="error-2 line"></span>
          <span class="error-1 line"></span>
        </section>
      </main>
    </div>
  }</div>;
}

export default App;
