import { useState } from "react";



export default function Score(props) {
    const [count, setCount] = useState(0)

    return (
      <div className="Score">
          <div>Score: {count} </div>
      </div>
    );
  }
  