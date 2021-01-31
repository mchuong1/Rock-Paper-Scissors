import './App.css';
import scissors from './img/scissors.png' 
import rock from './img/rock.png'
import paper from './img/paper.png'

import RockPaperScissor from './components/RockPaperScissor'

function App() {
  return (
    <div className="App">
      <div className="Playground">
        <RockPaperScissor img={scissors} type="scissors"/>
        <RockPaperScissor img={rock} type="rock"/>
        <RockPaperScissor img={paper} type="paper"/>
      </div>
    </div>
  );
}

export default App;
