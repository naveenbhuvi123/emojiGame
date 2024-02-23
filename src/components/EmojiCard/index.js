import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji

  const onEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-lists" onClick={onEmoji}>
      <button type="button" className="button">
        <img src={emojiUrl} className="emoji" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
