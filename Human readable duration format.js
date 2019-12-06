function formatDuration (seconds) {
  if(!seconds) return 'now'
  // Complete this function
  let tempSeconds = seconds
  const timeMap = {
    minute: 60,
    hour: 60*60,
    day: 60*60*24,
    year: 60*60*24*365
  }
  const timeInfo = new Map()
  let output = ''
  const renderYear = Math.floor(tempSeconds / timeMap.year)
  if(renderYear) {
    timeInfo.set(renderYear > 1 ? 'years' : 'year', renderYear)
    tempSeconds = tempSeconds - renderYear*timeMap.year
  }
  const renderDay = Math.floor(tempSeconds / timeMap.day)
  if(renderDay) {
    timeInfo.set(renderDay > 1 ? 'days' : 'day', renderDay)
    tempSeconds = tempSeconds - renderDay*timeMap.day
  }
  const renderHour = Math.floor(tempSeconds / timeMap.hour)
  if(renderHour) {
    timeInfo.set(renderHour > 1 ? 'hours' : 'hour', renderHour)
    tempSeconds = tempSeconds - renderHour*timeMap.hour
  }
  const renderMinute = Math.floor(tempSeconds / timeMap.minute)
  if(renderMinute) {
    timeInfo.set(renderMinute > 1 ? 'minutes' : 'minute', renderMinute)
    tempSeconds = tempSeconds - renderMinute*timeMap.minute
  }
  if(tempSeconds) {
    timeInfo.set(tempSeconds > 1 ? 'seconds' : 'second', tempSeconds)
  }

  [...timeInfo].forEach((val, index, map) => {
    output = output.concat(val.reverse().join(' '))
    if(index < [...timeInfo].length-2) output = output.concat(', ')
    if(index === [...timeInfo].length-2) output = output.concat(' and ')
  })
  return output
}

console.log(formatDuration(3153661))