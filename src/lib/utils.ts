import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleDownload = (src: string, alt: string) => {
  const link = document.createElement('a')
  link.href = src
  link.download = alt
  link.target = '_blank'
  link.click()
}
