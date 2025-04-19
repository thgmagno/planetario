'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'
import { useState } from 'react'
import { Button } from '../ui/button'
import { NeoFeedResponse } from '@/lib/types'

export function NeoWsGrid({ data }: { data: NeoFeedResponse }) {
  const days = Object.entries(data.near_earth_objects)
  const [visibleDays, setVisibleDays] = useState(1)

  const showMore = () => {
    setVisibleDays((prev) => prev + 1)
  }

  const visibleData = days.slice(0, visibleDays)

  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {visibleData.map(([date, objects]) =>
          objects.map((obj) => {
            const approach = obj.close_approach_data[0]

            return (
              <Card key={obj.id}>
                <CardHeader className="text-base font-semibold">
                  {obj.name}
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Date:</strong> {formatDate(date)}
                  </p>
                  <p>
                    <strong>Size:</strong>{' '}
                    {obj.estimated_diameter.meters.estimated_diameter_min.toFixed(
                      1,
                    )}{' '}
                    m -{' '}
                    {obj.estimated_diameter.meters.estimated_diameter_max.toFixed(
                      1,
                    )}{' '}
                    m
                  </p>
                  <p>
                    <strong>Hazardous:</strong>{' '}
                    {obj.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                  </p>
                  <p>
                    <strong>Velocity:</strong>{' '}
                    {Number(
                      approach.relative_velocity.kilometers_per_hour,
                    ).toLocaleString()}{' '}
                    km/h
                  </p>
                  <p>
                    <strong>Distance:</strong>{' '}
                    {Number(approach.miss_distance.kilometers).toLocaleString()}{' '}
                    km
                  </p>
                </CardContent>
              </Card>
            )
          }),
        )}
      </section>

      {visibleDays < days.length && (
        <div className="mt-4 text-center">
          <Button onClick={showMore} variant="secondary">
            Show More
          </Button>
        </div>
      )}
    </>
  )
}
