import { Card, CardHeader, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1>About this project</h1>
      </div>

      <Card className="overflow-hidden">
        <CardHeader>
          <h2 className="text-xl font-semibold">
            Explore space data through NASA’s API
          </h2>
          <span className="text-muted-foreground text-sm">
            Dynamic views powered by real data
          </span>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <Image
              src="/favicon-192.png"
              width={192}
              height={192}
              alt="Nasa logotipo"
              className="rounded-xl"
            />
          </div>
          <p>
            This project was built to consume different public endpoints from
            NASA’s API, providing accessible and interactive insights into space
            and astronomy.
          </p>
          <p>
            You can explore the Astronomy Picture of the Day (APOD), Mars rover
            images, space mission data, and much more — all in one place.
          </p>
          <p>
            The goal is to bring science and the universe closer to people,
            using modern web technologies to deliver an intuitive and
            informative experience.
          </p>
          <p>
            It’s a tribute to human curiosity and the incredible work done by
            space agencies like NASA.
          </p>
        </CardContent>
      </Card>
    </>
  )
}
