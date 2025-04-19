'use client'

import { Download } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  alt: string
  className?: string
}

export function MediaImage({ src, alt, className }: Props) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = src
    link.download = alt
    link.target = '_blank'
    link.click()
  }

  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-md',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL="/blur.jpg"
      />
      <Button
        onClick={handleDownload}
        size="icon"
        className="bg-background/70 absolute top-2 right-2 z-10 backdrop-blur"
        variant="ghost"
      >
        <Download size={16} />
      </Button>
    </div>
  )
}
