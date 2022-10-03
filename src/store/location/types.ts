export interface LocationState {
  current: LocationData | null
  recent: LocationData[]
}

export interface LocationData {
  id: number
  name: string
  local_names: any
  lat: number
  lon: number
  country: {
    code: string
    name: string
  }
  state: string
}

export interface GetLocationQuery {
  q: string
  limit?: number
}
