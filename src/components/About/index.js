import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a full-stack developer looking for a role within an
            established IT company offering an opportunity to work with the latest
            technologies on challenging and diverse projects. My GitHub username is LotusBlossom42
            and you can find links to all my social media including LinkedIn on the bottom of the SideBar.
          </p>
          <p align="LEFT">
            I have created full-stack apps within the python/flask, java/spring, and MERN stacks.
            I an perpetually working on improving my chops one design problem at a time. 
          </p>
        </div>
        <div className="stage-cube-cont" >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yXIAnewkQq0" title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        </div>
      </div>
        <Loader type="pacman" />
    </>
  )
}

export default About