// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {SuggestionDetail, updateInput} = props
  const {suggestion} = SuggestionDetail

  const onClickInput = () => {
    updateInput(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="btn" onClick={onClickInput}>
        <img
          className="icon"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
