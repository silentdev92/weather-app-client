type Units = 'standard' | 'metric' | 'imperial'

export const getSpeedUnits = (units: Units): string => {
  if (units === 'standard' || units === 'metric') return 'm/s'
  if (units === 'imperial') return 'm/h'
  return ''
}

export const getTempUnits = (units: Units): string => {
  if (units === 'standard') return 'K'
  if (units === 'metric') return '°C'
  if (units === 'imperial') return '°F'
  return ''
}
