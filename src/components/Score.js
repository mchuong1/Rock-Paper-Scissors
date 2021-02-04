export default function Score(props) {
    return (
      <div className="Score">
          <div>Wins: {props.wins} </div>
          <div>Losses: {props.losses}</div>
          <div>Ties: {props.ties}</div>
      </div>
    );
  }
  