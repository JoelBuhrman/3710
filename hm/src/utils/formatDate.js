const formatTime = date => {
    let hours = date.getHours()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours =  hours % 12
    hours = hours > 0 ? hours : 12
    let minutes = date.getMinutes()
    return `${hours}:${minutes}${ampm}`
}


export default date => {
    const day = date.toISOString().slice(0, 10)
    return `${day}, ${formatTime(date)}`
  }