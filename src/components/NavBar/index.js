// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isAlive} = props
  return (
    <nav className="navBar-section">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-logo"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isAlive ? (
        <div className="scores-section">
          <p className="score">score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
