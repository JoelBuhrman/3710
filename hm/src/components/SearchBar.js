import React from 'react'

const clearInput = () => document.getElementById('search-box').value = ''

export default props => {
    const {onChange, clearSuggestions} = props
    return (
        <div>
            <form autoComplete="off">
                <input id="search-box" type="search" placeholder="Search for movie title" className="medium-text" onChange={onChange}/>
            </form>
            <button className="clear-search" onClick={()=>{
                clearInput()
                clearSuggestions()
                }}>×
            </button>
        </div>
    )
}
