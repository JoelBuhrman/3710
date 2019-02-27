import React from 'react'

export default props => {
    const {suggestions, addToHistory} = props
    const shouldRenderSuggestions = suggestions.length > 0
    return shouldRenderSuggestions && (
        <ul className="searchSuggestionsContainer">
           {suggestions.map(
               suggestion => <li key={suggestion} className="searchSuggestion medium-text" onClick={() => addToHistory(suggestion)} value={suggestion}>{suggestion}</li>
           )}
        </ul>
    ) 
}
