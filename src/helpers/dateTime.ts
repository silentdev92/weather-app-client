import moment from 'moment'

export const getFormattedDate = (timestamp: number): string => {
  return moment(new Date(timestamp * 1000)).format('ddd, MMM D')
}

export const getFormattedTime = (timestamp: number): string => {
  return moment(new Date(timestamp * 1000)).format('H:mm')
}

export const getFormattedDateTime = (timestamp: number): string => {
  return moment(new Date(timestamp * 1000)).format('ddd, MMM D, H:mm')
}
