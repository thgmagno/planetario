import About from '@/components/tabs/About'
import Apod from '@/components/tabs/Apod'
import { AppTabs } from '@/components/tabs/AppTabs'
import { EPIC } from '@/components/tabs/EPIC'
import MarsRover from '@/components/tabs/MarsRover'
import { NeoWs } from '@/components/tabs/NeoWs'

export default async function Home() {
  return (
    <main className="mx-auto min-h-screen w-[92vw] max-w-5xl flex-col">
      <AppTabs
        id="main-tabs"
        items={[
          {
            label: 'Picture of the Day',
            value: 'pictureOfTheDay',
            content: <Apod />,
          },
          {
            label: 'Mars Rover Photos',
            value: 'marsRoverPhotos',
            content: <MarsRover />,
          },
          { label: 'EPIC', value: 'epic', content: <EPIC /> },
          { label: 'NeoWs', value: 'neows', content: <NeoWs /> },
          { label: 'About', value: 'about', content: <About /> },
        ]}
      />
    </main>
  )
}
