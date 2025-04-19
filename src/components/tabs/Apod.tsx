import { getAPOD } from '@/actions'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { MediaImage } from '../MediaImage'
import { formatDate } from '@/lib/utils'

export default async function Apod() {
  const data = await getAPOD()

  return (
    <>
      <h1>Astronomy Picture of the Day (APOD)</h1>

      <Card className="overflow-hidden">
        <CardHeader>
          <h2>{data.title}</h2>
          <span className="text-muted-foreground text-sm">
            {formatDate(data.date)}
          </span>
        </CardHeader>

        <CardContent className="space-y-4">
          <MediaImage src={data.url} alt={data.title} />
          <p>{data.explanation}</p>
        </CardContent>
      </Card>
    </>
  )
}
