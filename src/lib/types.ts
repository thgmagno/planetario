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

export interface EPICResponse {
  identifier: string
  caption: string
  image: string
  version: string
  date: string
  imageUrl: string
}

interface Asteroid {
  id: string
  name: string
  is_potentially_hazardous_asteroid: boolean
  estimated_diameter: Record<
    string,
    { estimated_diameter_min: number; estimated_diameter_max: number }
  >
  close_approach_data: {
    close_approach_date: string
    relative_velocity: Record<string, string>
    miss_distance: Record<string, string>
  }[]
}

export interface NeoFeedResponse {
  element_count: number
  near_earth_objects: Record<string, Asteroid[]>
}
