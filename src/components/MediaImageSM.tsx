'use client'

import Image from 'next/image'
import { Download } from 'lucide-react'
import { Button } from './ui/button'
import { handleDownload } from '@/lib/utils'

type MediaImageProps = {
  src: string
  alt: string
}

export function MediaImageSM({ src, alt }: MediaImageProps) {
  return (
    <div className="group relative h-60 overflow-hidden rounded">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-300 group-hover:scale-105"
      />
      <Button
        onClick={() => handleDownload(src, alt)}
        size="icon"
        className="bg-background/70 absolute top-2 right-2 z-10 backdrop-blur"
        variant="ghost"
      >
        <Download size={16} />
      </Button>
    </div>
  )
}
