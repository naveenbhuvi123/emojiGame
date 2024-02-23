import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    selectedIdList: [],
    isWin: false,
    isAlive: true,
  }

  onClickEmoji = id => {
    const {selectedIdList} = this.state
    const index = selectedIdList.indexOf(id)

    if (index === -1) {
      this.setState(prevState => ({
        selectedIdList: [...prevState.selectedIdList, id],
        currentScore: prevState.currentScore + 1,
      }))
      if (selectedIdList.length === 11) {
        this.setState({isAlive: false, isWin: true})
        // setTimeout(() => {
        //   this.setState({gameAlive: false, isWin: true})
        // }, 0)
      }
    } else {
      this.setState({isAlive: false})
    }
  }

  getWinOrLooseCard = () => {
    const {currentScore, topScore, isWin} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
    return (
      <WinOrLoseCard
        isWin={isWin}
        topScore={topScore}
        currentScore={currentScore}
        playAgain={this.playAgain}
      />
    )
  }

  getContent = () => {
    const {isAlive} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledEmojisLists = shuffledEmojisList()

    return isAlive
      ? shuffledEmojisLists.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emoji={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))
      : this.getWinOrLooseCard()
  }

  playAgain = () => {
    this.setState({isAlive: true, currentScore: 0, selectedIdList: []})
  }

  render() {
    const {currentScore, topScore, isAlive} = this.state
    return (
      <div className="emojiGameApp">
        <div className="navBar-container">
          <NavBar
            currentScore={currentScore}
            topScore={topScore}
            isAlive={isAlive}
          />

          <div className="Emoji-game-container">
            <ul className="Emoji-card-container-list">{this.getContent()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
