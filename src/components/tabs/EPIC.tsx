import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { getEPIC } from '@/actions'
import { MediaImageSM } from '../MediaImageSM'

export async function EPIC() {
  const data = await getEPIC()
  const title = data[0].caption

  return (
    <>
      <h1>EPIC - Earth Polychromatic Imaging Camera</h1>

      <Card className="overflow-hidden">
        <CardHeader>
          <h2>{title}</h2>
        </CardHeader>

        <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data.map((dt) => (
            <MediaImageSM
              src={dt.imageUrl}
              alt={dt.identifier}
              key={dt.identifier}
            />
          ))}
        </CardContent>
      </Card>
    </>
  )
}
