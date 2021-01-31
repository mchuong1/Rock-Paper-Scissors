import './App.css';
import scissors from './img/scissors.png' 
import rock from './img/rock.png'
import paper from './img/paper.png'

import RockPaperScissor from './components/RockPaperScissor'

function App() {
  return (
    <div className="App">
      <RockPaperScissor img={scissors}/>
      <RockPaperScissor img={rock}/>
      <RockPaperScissor img={paper}/>
    </div>
  );
}

export default App;
