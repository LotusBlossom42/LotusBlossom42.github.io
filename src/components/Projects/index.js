import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import pacman from '../../assets/images/pacman.png'
import oneeye from '../../assets/images/oneeye.png'
import blue from '../../assets/images/blue.png'
import red from '../../assets/images/red.png'


const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <h2>Click on a project title to see the source code</h2>
          <p align="LEFT">
            <ul>
              <li>
                <img src={pacman} alt="pacman"/>
                <a 
                  href="https://github.com/LotusBlossom42/pac-men-excercise/blob/main/README.md" 
                  rel="noreferrer"
                  target="_blank">PacMen Exercise
                </a>
                <p class="description">This project creates as many pacmen as you want and when you hit the "Start Game" button, all the pacmen move in random, frenzied directions.<br/>
                👻🍇🍉🍊🍋🍑🍐🍏👻</p>
              </li>
              <li>
                <img src={oneeye} alt="one eye to rule them all"/>
                <a 
                  href="https://github.com/LotusBlossom42/eye-exercise/blob/main/README.md"
                  rel="noreferrer"
                  target="_blank">Eye Movement Exercise
                </a>
                <p class="description">Do you ever get the feeling that 👀"Private eyes, they're watching you?" 👀 Well this project would prove you right. Move your mouse and watch these eyes "follow your every move".<br/>
                🕵️‍♂️👁️</p>
              </li>
            </ul>
          </p>
        </div>
        <div className="proj-cont" >
        <ul>
              <li>
                <img className="busses" src={blue} alt="blue bus marker"/>
                <img className="busses" src={red} alt="red bus marker"/>
                <a 
                  href="https://github.com/LotusBlossom42/real-time-bus-tracking-project/blob/main/README.md" 
                  rel="noreferrer"
                  target="_blank">Real Time Bus Tracker
                </a>
                <p className="description">Pah'ked the cah at Hah-vahd Yahd? No worries, I've got a bus-tracker for you 🚌<br/>
                Using the MBTA API, we can see the actual locations of busses in real time<br/> 
                along the Harvard-MIT route. Updates every 15 seconds. <br/> 
                How you like them apples? 🍎🍏</p>
              </li>
              <br></br>
              <li>
              <iframe src="https://giphy.com/embed/l3vRonw07hQfTefh6" 
                width="60" 
                height="60" 
                frameBorder="0" 
                class="giphy-embed" 
                alt="bouncing colorful 8-bit balls gif" 
                allowFullScreen>
              </iframe>
                <a
                  href="https://github.com/LotusBlossom42/bouncy-balls/blob/main/README.md"
                  rel="noreferrer"
                  target="_blank">&nbsp;&nbsp;Bouncy Balls!&nbsp;&nbsp;
                  </a>
                  <iframe src="https://giphy.com/embed/l3vRonw07hQfTefh6" 
                width="60" 
                height="60" 
                frameBorder="0" 
                class="giphy-embed" 
                alt="bouncing colorful 8-bit balls gif" 
                allowFullScreen>
              </iframe><br/>
                <iframe
                  width="280" 
                  height="158" 
                  src="https://www.youtube.com/embed/TderwOIsHSU" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                ></iframe>
              </li>
            </ul>
        </div>
      </div>
        <Loader type="pacman" />
    </>
  )
}
export default Projects