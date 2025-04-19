import { getMarsPhotos } from '@/actions'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { MediaImage } from '../MediaImage'
import { MarsRoverGrid } from './MarsRoverGrid'
import { formatDate } from '@/lib/utils'

export default async function MarsRover() {
  const data = await getMarsPhotos()
  const photo = data.photos[0]

  return (
    <>
      <h1>Mars Rover Photo</h1>

      <Card className="overflow-hidden">
        <CardHeader>
          <h2>
            {photo.rover.name} - {photo.camera.full_name}
          </h2>
          <span className="text-muted-foreground text-sm">
            {formatDate(photo.earth_date)}
          </span>
        </CardHeader>

        <CardContent className="space-y-4">
          <MediaImage src={photo.img_src} alt={photo.rover.name} />
          <p>
            This photo was taken by the {photo.rover.name} rover using the{' '}
            {photo.camera.full_name} on sol {photo.sol}.
          </p>
        </CardContent>
      </Card>

      <MarsRoverGrid data={data} />
    </>
  )
}
