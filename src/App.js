import './App.css';
import scissors from './img/scissors.png' 
import rock from './img/rock.png'
import paper from './img/paper.png'
import Score from './components/Score'
import { useState } from 'react';

function App() {

  const [computerChoice, setComputerChoice] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(0);
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)
  const choices = ["Rock", "Paper", "Scissors"]
  const types = [rock, paper, scissors]

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

  const RockPaperScissor = ({type}) => {
    var image;
    const setChoices = () =>{ 
      let randomChoice = Math.floor(3 * Math.random())
      setPlayerChoice(type)
      setComputerChoice(choices[randomChoice])
      decideWinner(type, choices[randomChoice])
    }
    switch(type){
      case "Scissors": image = scissors;
                       break;
      case "Paper":    image = paper;
                       break;
      case "Rock":     image = rock; 
                       break;
      default:         image = rock;
    }
    return (
      <div className="RockPaperScissor boxshadow">
          <img alt={type} src={image} className="circle-image" onClick={setChoices}></img>
      </div>
    );
  }

  return (
    <div className="App">
      <Score wins={wins} losses={losses} ties={ties}/>
      <h1>Computer</h1>
      <div className="Playground">
        <RockPaperScissor type={computerChoice} className="computer"/>
      </div>
      <div className="Playground">
        <RockPaperScissor type="Rock"/>
        <RockPaperScissor type="Paper"/>
        <RockPaperScissor type="Scissors"/>
      </div>
    </div>
  );
}

export default App;

