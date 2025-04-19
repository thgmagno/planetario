'use server'

import {
  APODResponse,
  EPICResponse,
  MarsRoverPhotoResponse,
  NeoFeedResponse,
} from '@/lib/types'

export async function getAPOD(): Promise<APODResponse> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
  )
  if (!res.ok) throw new Error('Failed to fetch data from NASA API')

  return res.json()
}

export async function getMarsPhotos(): Promise<MarsRoverPhotoResponse> {
  const res = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`,
  )
  if (!res.ok) throw new Error('Failed to fetch data from NASA API')

  return res.json()
}

export async function getEPIC(): Promise<EPICResponse[]> {
  const res = await fetch(
    `https://api.nasa.gov/EPIC/api/natural?api_key=${process.env.NASA_API_KEY}`,
  )
  if (!res.ok) throw new Error('Failed to fetch data from NASA API')

  const raw: EPICResponse[] = await res.json()

  const data = await Promise.all(
    raw.map(async (photo) => ({
      ...photo,
      imageUrl: await getEpicImageUrl(photo.date, photo.image),
    })),
  )

  return data
}

export async function getEpicImageUrl(date: string, image: string) {
  const [year, month, day] = date.split(' ')[0].split('-')
  return `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${image}.jpg`
}

export async function getNeoWs(): Promise<NeoFeedResponse> {
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.NASA_API_KEY}`,
  )

  if (!res.ok) throw new Error('Failed to fetch data from NASA API')

  return res.json()
}
