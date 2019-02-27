import React from 'react'

export default props => {
    const {searchHistory, clearHistory, deleteOption} = props
    
    return (
        <div className="searchHistoryContainer">
            <div className="searchHistoryToBar">
                <h1>Search history</h1>
                <button className="clearSearchHistory small-text" onClick={clearHistory}>Clear search history</button>
            </div>
            <ul aria-label="search history" className="searchHistory">
                    {searchHistory.map(
                        ({title, timeStamp, id}) => 
                        <li key={id} className="historyRow medium-text">{title} 
                            <time className="timeStamp small-text">{timeStamp}</time> 
                            <button className="deleteOption" onClick={()=> deleteOption(id) }>×</button>
                        </li>
                    )}
            </ul>
        </div>
    )
}
