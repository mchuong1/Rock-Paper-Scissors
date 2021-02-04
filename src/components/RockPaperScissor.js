
export default function RockPaperScissor(props) {
  const choices = ["Rock", "Paper", "Scissors"]

  const setChoices = () =>{ 
    let randomChoice = Math.floor(3 * Math.random())
    props.setPlayerChoice(props.type)
    props.setComputerChoice(choices[randomChoice])
  }

  return (
    <div className="RockPaperScissor">
        <img alt={props.type} src={props.img} className="circle-image" onClick={setChoices}></img>
    </div>
  );
}

