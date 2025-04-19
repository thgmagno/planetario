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

        <CardContent className="grid grid-cols-3 gap-4">
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
