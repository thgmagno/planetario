import { getNeoWs } from '@/actions'
import { NeoWsGrid } from './NeoWsGrid'

export async function NeoWs() {
  const data = await getNeoWs()

  return (
    <>
      <h1>NeoWs - Near Earth Objects</h1>

      <NeoWsGrid data={data} />
    </>
  )
}
