export interface APODResponse {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export type Locale = 'en-US' | 'pt-BR'

type Camera = {
  id: number
  name: string
  rover_id: number
  full_name: string
}

type Rover = {
  id: number
  name: string
  landing_date: string
  launch_date: string
  status: string
}

type Photo = {
  id: number
  sol: number
  camera: Camera
  img_src: string
  earth_date: string
  rover: Rover
}

export type MarsRoverPhotoResponse = {
  photos: Photo[]
}
