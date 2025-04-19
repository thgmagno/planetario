import { getMarsPhotos } from '@/actions'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { MediaImage } from '../MediaImage'
import { MediaImageSM } from '../MediaImageSM'

export default async function MarsRover() {
  const data = await getMarsPhotos()
  const photo = data.photos[0]

  const formatedDate = new Date(photo.earth_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <h1>Mars Rover Photo</h1>

      <Card className="overflow-hidden">
        <CardHeader>
          <h2>
            {photo.rover.name} - {photo.camera.full_name}
          </h2>
          <span className="text-muted-foreground text-sm">{formatedDate}</span>
        </CardHeader>

        <CardContent className="space-y-4">
          <MediaImage src={photo.img_src} alt={photo.rover.name} />
          <p>
            This photo was taken by the {photo.rover.name} rover using the{' '}
            {photo.camera.full_name} on sol {photo.sol}.
          </p>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:col-span-2">
        {data.photos.map((photo) => (
          <MediaImageSM
            src={photo.img_src}
            alt={photo.rover.name}
            key={photo.id}
          />
        ))}
      </section>
    </>
  )
}
