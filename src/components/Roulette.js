import scissors from '../img/scissors.png' 
import rock from '../img/rock.png'
import paper from '../img/paper.png'
import { useState, useRef, useEffect } from 'react'

export default function Roulette(props) {
    var images = [rock, paper, scissors]
    const [current, setCurrent] = useState(0)
    var currentImage = images[current]
    var delay = 100

    useInterval(()=>{
        if(current === 2) setCurrent(0)
        else setCurrent(current+1)
        console.log("works " + current)
    }, delay)

    const stopRoulette = () => {
        //slow down roulette
    }

    return (
      <div className="Roulette">
          <h1>Roulette</h1>
          <img alt="computer" src={currentImage} className="circle-image" onClick={stopRoulette}></img>
      </div>
    );
  }

export function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }