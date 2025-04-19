'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTabStore } from '@/store/useTabStore'
import { useEffect, useState } from 'react'

type TabItem = {
  label: string
  value: string
  content: React.ReactNode
}

type AppTabsProps = {
  id: string
  items: TabItem[]
}

export function AppTabs({ id, items }: AppTabsProps) {
  const [mounted, setMounted] = useState(false)
  const { tabs, setTab } = useTabStore()
  const selected = tabs[id] || items[0]?.value

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Tabs value={selected} onValueChange={(val) => setTab(id, val)}>
      <div className="no-scrollbar flex justify-between overflow-x-scroll">
        <TabsList>
          {items.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {items.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
