'use server'

import { APODResponse, MarsRoverPhotoResponse } from '@/lib/types'

export async function getAPOD(): Promise<APODResponse> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
  )

  return res.json()
}

export async function getMarsPhotos(): Promise<MarsRoverPhotoResponse> {
  const res = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`,
  )

  return res.json()
}
