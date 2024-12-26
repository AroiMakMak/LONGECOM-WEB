import moment from 'moment/min/moment-with-locales'




export const dateFormatEn = (date) => {
    return moment(date).locale('en').format('lll')
}
export const dateFormatTh = (date) => {
    return moment(date).locale('th').format('lll')
}