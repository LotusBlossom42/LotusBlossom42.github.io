import ProfilePic from '../../../assets/images/IMG_2285.svg'
import J from '../../../assets/images/jwhite.png'
import './index.scss'

const Logo = () => {
  return (
    <div className="picContainer">
      <img src={ProfilePic} alt="Jessica" className="profilePic" />
      <img src={J} alt="j" className="j" />
    </div>
  )
}

export default Logo