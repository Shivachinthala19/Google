// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }
  updateInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onchangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <img
            className="img"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-container">
            <div className="list-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                className="search-logo"
              />
              <input
                type="search"
                placeholder="search Google"
                value={searchInput}
                onChange={this.onchangeInput}
                className="input"
              />
            </div>
            <ul>
              {searchResult.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  SuggestionDetail={eachSuggestion}
                  updateInput={this.updateInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
// <div>
//   <div>
//     <img className="search-icon" alt="search icon" src="" />
//     <input
//       type="search"
//       className="search"
//       onClick={onChangeInput}
//       value={searchInput}
//     />
//   </div>
//   <ul>
//     {searchResult.map(eachSuggestion => (
//       <SuggestionItem
//         key={eachSuggestion.id}
//         eachSuggestionDetail={eachSuggestion}
//         onSearchInput={this.onSearchInput}
//       />
//     ))}
//   </ul>
// </div>
