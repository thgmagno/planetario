import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TabMap = {
  [groupId: string]: string
}

type TabStore = {
  tabs: TabMap
  setTab: (groupId: string, value: string) => void
}

export const useTabStore = create<TabStore>()(
  persist(
    (set, get) => ({
      tabs: {},
      setTab: (groupId, value) =>
        set({
          tabs: { ...get().tabs, [groupId]: value },
        }),
    }),
    {
      name: 'tabs-store',
    },
  ),
)
