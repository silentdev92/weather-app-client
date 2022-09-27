export interface LocationState {
  current: LocationData
  recent: LocationData[]
}

export interface LocationResponse {
  name: string
  local_names: any
  lat: number
  lon: number
  country: string
  state: string
}

export interface LocationData extends LocationResponse {
  id: number
}

export interface getLocationQuery {
  q: string
  limit?: number
}
