'use client'

import { useState } from 'react'
import { MediaImageSM } from '../MediaImageSM'
import { MarsRoverPhotoResponse } from '@/lib/types'
import { Button } from '../ui/button'

export function MarsRoverGrid({ data }: { data: MarsRoverPhotoResponse }) {
  const [visiblePhotos, setVisiblePhotos] = useState(9)

  const showMorePhotos = () => {
    setVisiblePhotos((prev) => prev + 9)
  }

  return (
    <>
      <h2 className="mt-16">Galery of Mars Rover Photos</h2>

      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.photos.slice(0, visiblePhotos).map((photo) => (
          <MediaImageSM
            src={photo.img_src}
            alt={photo.rover.name}
            key={photo.id}
          />
        ))}
      </section>

      {visiblePhotos < data.photos.length && (
        <div className="mt-4 text-center">
          <Button onClick={showMorePhotos} variant="secondary">
            Show More
          </Button>
        </div>
      )}
    </>
  )
}
