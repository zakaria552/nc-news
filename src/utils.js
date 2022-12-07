export function formatDate(strDate) {
    const date = new Date(strDate)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const m = date.getMonth()
    const d = date.getDate()
    const year = date.getFullYear()
    const hr = date.getHours()
    const min = `${date.getMinutes()}`.length === 1 ? `0${date.getMinutes()}`: date.getMinutes();
    const getTime = `${hr}:${min}`
    const getDate = `${months[m]} ${d}, ${year}`
    return {getTime, getDate}
}