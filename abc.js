import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

// comment
setupCounter(document.querySelector('#counter'))
