export const getTimeSincePost = (timestamp) => {

    let storedDate =  new Date(timestamp.toDate())
    let nowDate = new Date()
    let diff = (nowDate.getTime() - storedDate.getTime())

    var seconds = Math.floor(diff / 1000),
    minutes = Math.floor(seconds / 60),
    hours   = Math.floor(minutes / 60),
    days    = Math.floor(hours / 24),
    weeks   = Math.floor(days / 7),
    months  = Math.floor(days / 30),
    years   = Math.floor(days / 365);

    if (years > 1) {
        return years + "years ago" 
    }
    else if (years > 0) {
        return years + "year ago" 
    }
    else if (months > 1) {
        return months + "months ago" 
    }
    else if (months > 0) {
        return months + "month ago" 
    }
    else if (weeks > 1) {
        return weeks + "weeks ago" 
    }
    else if (weeks > 0) {
        return weeks + "week ago" 
    }
    else if (days > 1) {
        return days + "days ago" 
    }
    else if (days > 0) {
        return days + "day ago" 
    }
    else if (hours > 1) {
        return hours + "h ago" 
    }
    else if (hours > 0) {
        return hours + "h ago" 
    }
    else {
        return "less than 1h ago"
    }

}