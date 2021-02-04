import './App.css';
import scissors from './img/scissors.png' 
import rock from './img/rock.png'
import paper from './img/paper.png'
import RockPaperScissor from './components/RockPaperScissor'
import Score from './components/Score'
import { useEffect, useState } from 'react';

function App() {

  const [computerChoice, setComputerChoice] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(0);
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)

  useEffect(()=> {decideWinner(playerChoice, computerChoice)},[playerChoice, computerChoice]) //what if player and computer chooses same choice??

  const decideWinner = (playerChoice, computerChoice) => {
    var player, computer = false
    if(playerChoice === 0) return;
    if(playerChoice === computerChoice){
      console.log("Tie!")
      setTies(ties+1)
    }
    else {
      switch(playerChoice){
        case "Scissors": 
          computerChoice === "Rock" ? console.log(`Computer Smashes Player`): console.log(`Player Cuts Computer`)
          computerChoice === "Rock" ? computer=true : player=true
          break
        case "Rock": 
          computerChoice === "Paper" ? console.log(`Computer Covers Player`) : console.log(`Player Smashes Computer`)
          computerChoice === "Paper" ? computer=true : player=true
          break
        case "Paper": 
          computerChoice === "Scissors" ? console.log(`Computer Cuts Player`) : console.log(`Player Covers Computer`)
          computerChoice === "Scissors" ? computer=true : player=true
          break
        default: 
          console.log(`Error: Player: ${playerChoice} Computer: ${computerChoice}`)
      }
    }
    if(player) setWins(wins+1)
    if(computer) setLosses(losses+1)
  }

  return (
    <div className="App">
      <Score wins={wins} losses={losses} ties={ties}/>
      <div className="Playground">
        <RockPaperScissor img={rock} type="Rock" setPlayerChoice={setPlayerChoice} setComputerChoice={setComputerChoice}/>
        <RockPaperScissor img={paper} type="Paper" setPlayerChoice={setPlayerChoice} setComputerChoice={setComputerChoice}/>
        <RockPaperScissor img={scissors} type="Scissors" setPlayerChoice={setPlayerChoice} setComputerChoice={setComputerChoice}/>
      </div>
    </div>
  );
}

export default App;
